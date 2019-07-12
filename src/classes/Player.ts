import { BrowserWindow } from 'electron'
import fs from 'fs'
import path from 'path'
import { Direction, Music, readTags } from './Util'

export default class Player {
  public playlist: Music[]

  public currentMusic: number

  private proccess: BrowserWindow

  public constructor (process: BrowserWindow, musicsDir: string) {
    this.playlist = []
    this.proccess = process
    this.currentMusic = 0

    // Read the files from the disk
    const files = fs.readdirSync(musicsDir)

    // If the are any file in the folder
    if (files) {
      const promises = []
      for (const file of files) {
      // If it is a mp3 file
        if (file.substr(-4) === '.mp3') {
          promises.push(readTags(path.join(musicsDir, file)).then((metadata): void => {
            this.playlist.push(new Music(
              metadata.common.title,
              metadata.common.artist,
              metadata.common.album,
              metadata.common.picture
            ))
          }))
        }
      }
      // When all the promises finish, send message with the playlist to the main window
      Promise.all(promises).then((): void => {
        console.log(this.playlist)
        this.controlProcess('playlist-ready', { playlist: this.playlist })
      })
    }
  }

  public changeMusic (direction: Direction): void {
    this.currentMusic += direction
    console.log(this.playlist[this.currentMusic])
  }

  private controlProcess (cmd: string, ...args: object[]): void{
    this.proccess.webContents.send(cmd, args)
  }
}
