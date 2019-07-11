import { app, BrowserWindow } from 'electron'

// Global variables
let mainWindow: Electron.BrowserWindow

app.on('ready', (): void => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.maximize()
  mainWindow.webContents.openDevTools()

  mainWindow.loadFile('../ui/index.html')

  mainWindow.on('closed', ():void => { mainWindow = null })
})
