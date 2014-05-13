chrome.app.runtime.onLaunched.addListener(function(launchData) {
    chrome.app.window.create('../index.html', {
        id: "Smart-QQ",
        minWidth: 300,
        minHeight: 400,
        maxWidth: 990,
        maxHeight: 1200,
        frame: "chrome"
    });
});

chrome.runtime.onInstalled.addListener(function() {
    console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() {
    // Do some simple clean-up tasks.
});