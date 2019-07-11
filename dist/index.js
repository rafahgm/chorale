"use strict";var _electron = require('electron');

// Global variables
let mainWindow

_electron.app.on('ready', () => {
  mainWindow = new (0, _electron.BrowserWindow)({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.maximize()
  mainWindow.webContents.openDevTools()

  mainWindow.loadFile('../ui/index.html')

  mainWindow.on('closed', () => { mainWindow = null })
})
