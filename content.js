(function () {
  function applyDarkMode() {
    let style = document.createElement("style");
    style.id = "ph-dark-mode-style";
    style.innerHTML = `
        /* Base colors */
        body {
          background: #121212 !important;
          color: #e0e0e0 !important;
        }

        /* Headings */
        h1, h2, h3, h4, h5, h6,
        .heading, 
        .post-header,
        .headline,
        .title,
        .post-title,
        .collection-title,
        .section-heading {
          color: #ffffff !important;
        }

        /* Product titles and names */
        .post-name,
        .post-tagline,
        .product-name,
        .product-description,
        .topic-name,
        .collection-name {
          color: #ffffff !important;
        }

        /* User names and metadata */
        .user-name,
        .maker-name,
        .comment-author,
        .meta-text {
          color: #e0e0e0 !important;
        }

        /* Stats and numbers */
        .upvote-count,
        .comment-count,
        .stats-number {
          color: #ffffff !important;
        }

        /* General text elements */
        .description,
        .tagline,
        .body-text,
        .comment-text {
          color: #e0e0e0 !important;
        }

        /* Links */
        a {
          color:rgb(255, 255, 255) !important;
        }
        a:hover {
          color:rgb(123, 123, 123) !important;
          text-decoration: underline !important;
        }

        /* Rest of your existing styles */
        header, nav, footer {
          background: #1e1e1e !important;
          border-color: #2d2d2d !important;
        }

        .white-background-color, 
        .background-white, 
        .white-foreground {
          background-color: #1e1e1e !important;
        }

        *:hover {
          background-color: #2d2d2d !important;
        }

        button, 
        .button {
          background-color: #2d2d2d !important;
          border-color: #404040 !important;
        }

        input, 
        textarea, 
        select {
          background-color: #1e1e1e !important;
          border-color: #404040 !important;
          color: #e0e0e0 !important;
        }

        .border-bottom,
        .border-top,
        .border-left,
        .border-right {
          border-color: #2d2d2d !important;
        }
      `;
    document.body.appendChild(style);
  }

  function removeDarkMode() {
    let existingStyle = document.getElementById("ph-dark-mode-style");
    if (existingStyle) existingStyle.remove();
  }

  // Get the saved mode from localStorage
  let isDarkMode = localStorage.getItem("ph-dark-mode") === "enabled";

  if (isDarkMode) {
    applyDarkMode();
  }

  // Listen for messages from popup.js to toggle dark mode
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "toggleDarkMode") {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        applyDarkMode();
        localStorage.setItem("ph-dark-mode", "enabled");
      } else {
        removeDarkMode();
        localStorage.setItem("ph-dark-mode", "disabled");
      }
    }
  });
})();
