chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "click"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}