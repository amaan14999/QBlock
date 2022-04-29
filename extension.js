chrome.webNavigation.onCompleted.addListener((data) => {
  if (new URL(data.url).host === "www.linkedin.com") {
    chrome.scripting.executeScript(
      {
        files: ["linkedin.js"],
        target: { tabId: data.tabId },
      },
      () => {}
    );
  }
}, {});
