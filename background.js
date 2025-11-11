chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "translate-selection",
        title: "Translate '%s'", 
        contexts: ["selection"]
    });

    chrome.storage.local.get("apiKey", (data) => {
        if (!data.apiKey) {
            chrome.storage.local.set({ apiKey: "" });
        }
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translate-selection") {
        chrome.storage.local.set({ textToTranslate: info.selectionText }, () => {
        });
    }
});

chrome.commands.onCommand.addListener(async (command) => {
    if (command === "translate-selection") {
        
        let selection;
        const tabs = await chrome.tabs.query({
            currentWindow: true,
            active: true
        });

        const tabUrl = tabs[0].url;
        if (tabUrl && (tabUrl.startsWith('chrome://') || tabUrl.startsWith('about:'))) {
            return; 
        }

        try {
            selection = await chrome.tabs.sendMessage(tabs[0].id, "getSelection"); 

        } catch (e) {
            console.error(e);
            return; 
        }

        if (selection) {
            chrome.storage.local.set({ textToTranslate: selection }, () => {
            });
        }
    }
});
