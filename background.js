
chrome.browserAction.onClicked.addListener(function(tab) {
  var actn_url = "javascript:window.print();";
  chrome.tabs.update(tab.id, {url: actn_url});
  

});
