import * as mm from 'music-metadata'

export enum Direction {
  Previous = -1,
  Reload = 0,
  Next = 1
}

export const readTags = function (filePath: string) : Promise<mm.IAudioMetadata> {
  return mm.parseFile(filePath)
}

export class Music {
  public title: string

  public artist: string

  public album: string

  public picture: mm.IPicture[]

  public constructor (title: string, artist: string, album: string, picture: mm.IPicture[]) {
    this.title = title
    this.artist = artist
    this.album = album
    this.picture = picture
  }
}
