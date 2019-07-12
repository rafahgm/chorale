"use strict";var _electron = require('electron');

_electron.ipcRenderer.on('playlist-ready', (event, args) => {
  console.log(args[0].playlist)
})
