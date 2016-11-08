'use strict';

var queryInfo = {
  windowId: chrome.windows.WINDOW_ID_CURRENT
};

chrome.tabs.query(queryInfo, tabs => {
});
