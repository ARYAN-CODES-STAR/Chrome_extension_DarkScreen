(function () {
    function applyDarkMode() {
      let style = document.createElement("style");
      style.id = "ph-dark-mode-style";
      style.innerHTML = `
        body { background: #121212 !important; color: #ffffff !important; }
        a, p, span, div { color: #ffffff !important; }
        header, nav, footer, .ph-nav, .ph-header { background: #1e1e1e !important; }
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
  