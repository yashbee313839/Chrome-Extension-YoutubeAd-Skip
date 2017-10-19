chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration'
  });
});