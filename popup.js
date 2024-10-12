document.addEventListener('DOMContentLoaded', function() {
  const fontSelect = document.getElementById('fontSelect');
  const applyButton = document.getElementById('applyFont');

  applyButton.addEventListener('click', function() {
    const selectedFont = fontSelect.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "changeFont", font: selectedFont});
    });
  });
});