class world {
  constructor(width, height) {
    this.tiles = []
    this.width = width
    this.height = height
    this.tileSize = 24
    for (let y = 0; y < height; y++) {
      this.tiles.push([])
      for (let x = 0; x < width; x++) {
        if (y==0 || y==height-1) {
          this.tiles[y].push(8)
        } else {
          if (x==0 || x==width-1) {
            this.tiles[y].push(11)
          } else {
            this.tiles[y].push(0)
          }
        }
      }
    }
  }

  tileAt(x, y) {
    return this.tiles[y][x]
  }
}

export default world;