'use strict';

var queryInfo = {
  windowId: chrome.windows.WINDOW_ID_CURRENT
};

chrome.browserAction.onClicked.addListener(tabs => {
  chrome.tabs.query(queryInfo, tabs => {
    tabs.sort(function (tab1, tab2) {
      if (tab1.url > tab2.url) {
        return -1;
      }

      if (tab1.url < tab2.url) {
        return 1;
      }

      return 0;
    })

    for (var i = 0; i < tabs.length - 1; ++i) {
      if (tabs[i].url == tabs[i + 1].url) {
        chrome.tabs.remove(tabs[i + 1].id);
      }
    }
  });
});
