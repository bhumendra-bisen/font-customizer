chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "changeFont") {
    const style = document.createElement('style');
    style.textContent = `
      * {
        font-family: ${request.font} !important;
      }
    `;
    document.head.appendChild(style);
  }
});