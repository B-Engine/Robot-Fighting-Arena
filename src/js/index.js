import '../css/style.css'
import io from 'socket.io-client'
import Atlas from './Atlas';

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}



const socket = io()
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const atlas = new Atlas(ctx)

socket.on('map', (map) => {
  console.log('map')
  canvas.width = map.width * map.tileSize
  canvas.height = map.height * map.tileSize
  map.tiles.map((row, y) => {
    row.map((tile, x) => {
      atlas.drawTile(
        tile,
        x,
        y
      )
    })
  })
})

socket.on('player', (player) => {
  atlas.drawCharacter(
    player.index,
    player.x,
    player.y
  )
})

