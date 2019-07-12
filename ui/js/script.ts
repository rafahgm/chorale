import { ipcRenderer } from 'electron'

ipcRenderer.on('playlist-ready', (event, args): void => {
  console.log(args[0].playlist)
})
