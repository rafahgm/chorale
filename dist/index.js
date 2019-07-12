"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _electron = require('electron');
var _Player = require('./classes/Player'); var _Player2 = _interopRequireDefault(_Player);

// Global variables
let mainWindow
let player

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

  mainWindow.webContents.on('did-finish-load', () => {
    player = new (0, _Player2.default)(mainWindow, '/home/rafael/Música')
    player.changeMusic(1)
  })
})
