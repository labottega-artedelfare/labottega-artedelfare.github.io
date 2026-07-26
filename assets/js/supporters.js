(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var content = window.LANDING_CONTENT || {};
  var program = content.supportersProgram || {};

  function appendList(container, items) {
    var list = document.createElement("ul");

    (items || []).forEach(function (item) {
      var listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    container.appendChild(list);
  }

  function createBlock(title, value) {
    var block = document.createElement("div");
    var heading = document.createElement("h3");

    block.className = "tier-block";
    heading.textContent = title;
    block.appendChild(heading);

    if (Array.isArray(value)) {
      appendList(block, value);
    } else {
      var paragraph = document.createElement("p");
      paragraph.textContent = value || "";
      block.appendChild(paragraph);
    }

    return block;
  }

  function fillProgramContent() {
    var title = document.querySelector("[data-program-title]");
    var description = document.querySelector("[data-program-description]");
    var tiers = document.querySelector("[data-supporter-tiers]");

    if (title && program.title) {
      title.textContent = program.title;
    }

    if (description && program.description) {
      description.textContent = program.description;
    }

    if (!tiers || !Array.isArray(program.categories)) {
      return;
    }

    program.categories.forEach(function (category, index) {
      var details = document.createElement("details");
      var summary = document.createElement("summary");
      var number = document.createElement("span");
      var name = document.createElement("span");
      var body = document.createElement("div");

      details.className = "tier-details";
      number.className = "tier-number";
      body.className = "tier-details__content";

      number.textContent = String(index + 1).padStart(2, "0");
      name.textContent = category.name;

      summary.append(number, name);
      body.append(
        createBlock("Destinatari", category.audience),
        createBlock("Benefici", category.benefits),
        createBlock("Spirito della qualifica", category.spirit)
      );
      details.append(summary, body);
      tiers.appendChild(details);
    });
  }

  function fillRegistrationState() {
    var actions = document.querySelector("[data-registration-actions]");

    if (!actions || !config.registrationOpen || !config.registrationEndpoint) {
      return;
    }

    var registrationLink = document.createElement("a");
    registrationLink.className = "button button--primary";
    registrationLink.href = config.registrationEndpoint;
    registrationLink.target = "_blank";
    registrationLink.rel = "noopener noreferrer";
    registrationLink.textContent = "Registrati e richiedi il badge";

    actions.replaceChildren(registrationLink);
  }

  fillProgramContent();
  fillRegistrationState();
})();
