document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("toggleMode");
  
    // Get the current mode from localStorage
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getCurrentMode
      }, (results) => {
        let isDarkMode = results[0].result;
        updateButton(isDarkMode);
      });
    });
  
    function updateButton(isDarkMode) {
      if (isDarkMode) {
        button.innerText = "Switch to Light Mode";
        button.classList.add("dark");
      } else {
        button.innerText = "Switch to Dark Mode";
        button.classList.add("light");
      }
    }    
  
    button.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { action: "toggleDarkMode" });
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: getCurrentMode
        }, (results) => {
          let isDarkMode = results[0].result;
          updateButton(isDarkMode);
        });
      });
    });
  });
  
  // Function to get the current mode from localStorage inside Product Hunt
  function getCurrentMode() {
    return localStorage.getItem("ph-dark-mode") === "enabled";
  } 
  