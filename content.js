chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if (request === "getSelection") {
        
        const selectionText = window.getSelection().toString();
        
        sendResponse(selectionText);
        
        return true; 
    }
});
