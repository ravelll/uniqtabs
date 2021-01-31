chrome.browserAction.onClicked.addListener((_) => {
  chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, async (tabs) => {
    const openedURLs = [...new Set(tabs.map((t) => t.url))]
    openedURLs.forEach((url) => {
      tabs.filter((t) => t.url === url).forEach((t, i) => {
        // Close duplicated tabs except first one
        if (i > 0) {
          chrome.tabs.remove(t.id)
        }
      })
    })
  })
})
