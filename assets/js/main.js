(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var content = window.LANDING_CONTENT || {};
  var hero = content.hero || {};
  var program = content.supportersProgram || {};

  function setText(selector, value) {
    var node = document.querySelector(selector);
    if (node && value) {
      node.textContent = value;
    }
  }

  function externalAttributes(anchor) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  function createList(items) {
    var list = document.createElement("ul");
    (items || []).forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    return list;
  }

  function fillContent() {
    setText('[data-content="hero-eyebrow"]', hero.eyebrow);
    setText('[data-content="hero-title"]', hero.title);
    setText('[data-content="hero-introduction"]', hero.introduction);
    setText('[data-content="presentation"]', hero.introduction);
    setText('[data-content="supporters-title"]', program.title);
    setText('[data-content="supporters-description"]', program.description);
    setText('[data-content="badge-duration"]', (config.badgeDuration || program.badgeDuration || "annuale").toLowerCase());
    setText('[data-content="badge-year"]', config.badgeYear);
    setText('[data-current-year]', String(new Date().getFullYear()));
  }

  function fillLinks() {
    var linkMap = {
      website: config.websiteUrl,
      instagram: config.instagramUrl,
      facebook: config.facebookUrl,
      youtube: config.youtubeUrl,
      email: config.contactEmail ? "mailto:" + config.contactEmail : ""
    };

    Object.keys(linkMap).forEach(function (key) {
      document.querySelectorAll('[data-link="' + key + '"]').forEach(function (anchor) {
        if (!linkMap[key]) {
          return;
        }
        anchor.href = linkMap[key];
        if (key !== "email") {
          externalAttributes(anchor);
        }
      });
    });

    var publicLinks = [
      { label: "Sito internet", href: config.websiteUrl, detail: "mimmociavarelli.com" },
      { label: "Instagram", href: config.instagramUrl, detail: "@artedelfare.labottega" },
      { label: "Facebook", href: config.facebookUrl, detail: "La Bottega - Arte del Fare" },
      { label: "YouTube", href: config.youtubeUrl, detail: "@MimmoCiavarelli" },
      { label: "Email", href: linkMap.email, detail: config.contactEmail }
    ];

    var list = document.querySelector("[data-public-links]");
    if (!list) {
      return;
    }

    publicLinks.forEach(function (item) {
      if (!item.href) {
        return;
      }

      var li = document.createElement("li");
      var anchor = document.createElement("a");
      var strong = document.createElement("strong");
      var span = document.createElement("span");

      anchor.href = item.href;
      if (!item.href.startsWith("mailto:")) {
        externalAttributes(anchor);
      }

      strong.textContent = item.label;
      span.textContent = item.detail || item.href.replace(/^mailto:/, "");

      anchor.append(strong, span);
      li.appendChild(anchor);
      list.appendChild(li);
    });
  }

  function fillSupporters() {
    var tiers = document.querySelector("[data-supporter-tiers]");
    if (!tiers || !Array.isArray(program.categories)) {
      return;
    }

    program.categories.forEach(function (category, index) {
      var article = document.createElement("article");
      var titleCol = document.createElement("div");
      var metaCol = document.createElement("div");
      var indexNode = document.createElement("span");
      var heading = document.createElement("h3");

      article.className = "tier";
      titleCol.className = "tier__title";
      metaCol.className = "tier__meta";
      indexNode.className = "tier__index";

      indexNode.textContent = String(index + 1).padStart(2, "0");
      heading.textContent = category.name;
      titleCol.append(indexNode, heading);

      [
        { label: "Destinatari", node: createList(category.audience) },
        { label: "Benefici", node: createList(category.benefits) },
        { label: "Spirito", text: category.spirit }
      ].forEach(function (block) {
        var wrapper = document.createElement("div");
        var label = document.createElement("span");
        wrapper.className = "tier__block";
        label.className = "tier__label";
        label.textContent = block.label;
        wrapper.appendChild(label);

        if (block.node) {
          wrapper.appendChild(block.node);
        } else {
          var paragraph = document.createElement("p");
          paragraph.textContent = block.text || "";
          wrapper.appendChild(paragraph);
        }

        metaCol.appendChild(wrapper);
      });

      article.append(titleCol, metaCol);
      tiers.appendChild(article);
    });
  }

  function fillRegistrationState() {
    var state = document.querySelector("[data-registration-state]");
    if (!state) {
      return;
    }

    if (config.registrationOpen && config.registrationEndpoint) {
      var anchor = document.createElement("a");
      anchor.className = "button button--primary";
      anchor.href = config.registrationEndpoint;
      anchor.textContent = "Registrati e richiedi il badge";
      externalAttributes(anchor);
      state.replaceWith(anchor);
    } else {
      state.textContent = "Registrazioni in apertura";
    }
  }

  fillContent();
  fillLinks();
  fillSupporters();
  fillRegistrationState();
})();
