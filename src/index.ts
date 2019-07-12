import { app, BrowserWindow } from 'electron'
import Player from './classes/Player'

// Global variables
let mainWindow: Electron.BrowserWindow
let player: Player

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

  mainWindow.webContents.on('did-finish-load', (): void => {
    player = new Player(mainWindow, '/home/rafael/Música')
    player.changeMusic(1)
  })
})
