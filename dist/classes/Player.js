"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _Util = require('./Util');

 class Player {
  

  

  

   constructor (process, musicsDir) {
    this.playlist = []
    this.proccess = process
    this.currentMusic = 0

    // Read the files from the disk
    const files = _fs2.default.readdirSync(musicsDir)

    // If the are any file in the folder
    if (files) {
      const promises = []
      for (const file of files) {
      // If it is a mp3 file
        if (file.substr(-4) === '.mp3') {
          promises.push(_Util.readTags.call(void 0, _path2.default.join(musicsDir, file)).then((metadata) => {
            this.playlist.push(new (0, _Util.Music)(
              metadata.common.title,
              metadata.common.artist,
              metadata.common.album,
              metadata.common.picture
            ))
          }))
        }
      }
      // When all the promises finish, send message with the playlist to the main window
      Promise.all(promises).then(() => {
        console.log(this.playlist)
        this.controlProcess('playlist-ready', { playlist: this.playlist })
      })
    }
  }

   changeMusic (direction) {
    this.currentMusic += direction
    console.log(this.playlist[this.currentMusic])
  }

   controlProcess (cmd, ...args){
    this.proccess.webContents.send(cmd, args)
  }
} exports.default = Player;
