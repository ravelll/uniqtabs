const queryInfo = {
  windowId: chrome.windows.WINDOW_ID_CURRENT
}

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query(queryInfo, (tabs: any) => {
    tabs.sort(function(tab1: any, tab2: any) {
      if (tab1.url > tab2.url) {
        return -1
      }

      if (tab1.url < tab2.url) {
        return 1
      }

      return 0
    })

    for (let i = 0; i < tabs.length - 1; ++i) {
      if (tabs[i].url === tabs[i + 1].url) {
        chrome.tabs.remove(tabs[i + 1].id)
      }
    }
  })
})
