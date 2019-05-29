import Tiles from '../img/Tiles.png'
import Characters from '../img/Characters.png'

export default class Atlas {
  constructor(ctx) {
    this.tiles = new Image()
    this.tiles.src = Tiles
    this.tilesWidth = 35
    this.tilesHeigth = 41
    this.characters = new Image()
    this.characters.src = Characters
    this.charactersWidth = 10
    this.charactersHeight = 10
    this.tileSize = 24
    this.ctx = ctx
  }

  drawTile(tile, x, y) {
    this.ctx.drawImage(
      this.tiles,
      (tile % this.tilesWidth) * this.tileSize,
      Math.floor(tile / this.tilesHeigth) * this.tileSize,
      this.tileSize, this.tileSize,
      x * this.tileSize, y * this.tileSize,
      this.tileSize, this.tileSize
    )
  }



  drawCharacter(tile, x, y) {
    this.ctx.drawImage(
      this.characters,
      (tile % this.tilesWidth) * this.tileSize,
      Math.floor(tile / this.tilesHeigth) * this.tileSize,
      this.tileSize, this.tileSize,
      x * this.tileSize, y * this.tileSize,
      this.tileSize, this.tileSize
    )
  }
}