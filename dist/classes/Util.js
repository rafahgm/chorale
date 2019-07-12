"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }Object.defineProperty(exports, "__esModule", {value: true});var _musicmetadata = require('music-metadata'); var mm = _interopRequireWildcard(_musicmetadata);

var Direction; (function (Direction) {
  const Previous = -1; Direction[Direction["Previous"] = Previous] = "Previous";
  const Reload = 0; Direction[Direction["Reload"] = Reload] = "Reload";
  const Next = 1; Direction[Direction["Next"] = Next] = "Next";
})(Direction || (exports.Direction = Direction = {}));

 const readTags = function (filePath)  {
  return mm.parseFile(filePath)
}; exports.readTags = readTags

 class Music {
  

  

  

  

   constructor (title, artist, album, picture) {
    this.title = title
    this.artist = artist
    this.album = album
    this.picture = picture
  }
} exports.Music = Music;
