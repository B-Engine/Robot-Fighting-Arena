
export default class World {
  constructor() {
    this.layers = []
  }

  addLayer(layer) {
    this.layers[layer.id] = layer
  }
}