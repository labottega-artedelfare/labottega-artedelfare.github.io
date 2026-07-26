(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var linkMap = {
    website: config.websiteUrl,
    instagram: config.instagramUrl,
    youtube: config.youtubeUrl,
    facebook: config.facebookUrl,
    email: config.contactEmail ? "mailto:" + config.contactEmail : ""
  };

  function isExternal(url) {
    return /^https?:\/\//i.test(url);
  }

  Object.keys(linkMap).forEach(function (key) {
    document.querySelectorAll('[data-link="' + key + '"]').forEach(function (anchor) {
      var url = linkMap[key];

      if (!url) {
        anchor.removeAttribute("href");
        anchor.setAttribute("aria-disabled", "true");
        return;
      }

      anchor.href = url;

      if (isExternal(url)) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
    });
  });

  document.querySelectorAll("[data-current-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
