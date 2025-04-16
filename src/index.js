const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // Disable the default menu
  Menu.setApplicationMenu(null);

  win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);