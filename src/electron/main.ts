import { app, BrowserWindow } from 'electron';
import path from 'path';

const isDev = !app.isPackaged;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    if (isDev) {
        // Load React dev server
        mainWindow.loadURL('http://localhost:5173/');
        // Open DevTools in development
        mainWindow.webContents.openDevTools();
    } else {
        // Load built files in production
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }
});

