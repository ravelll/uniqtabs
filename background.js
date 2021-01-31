const queryInfo = {
  windowId: chrome.windows.WINDOW_ID_CURRENT
}

chrome.browserAction.onClicked.addListener(async (_) => {
  await chrome.tabs.query(queryInfo, (tabs) => {
    for (let i = 0; i < tabs.length - 1; ++i) {
      if (tabs[i].url === tabs[i + 1].url) {
        chrome.tabs.remove(tabs[i + 1].id)
      }
    }
  })
})
