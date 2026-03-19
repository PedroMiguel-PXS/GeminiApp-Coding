// we will do a app that run gemini site on a webview
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "Gemini App",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });
    // load the site
    win.loadURL('https://gemini.google.com');
}

// pre-final
app.whenReady().then(createWindow);
  
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});