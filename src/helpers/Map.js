export default class Map {
  constructor(mapId, latitude, longitude) {
    this.map = window.L.map(mapId).setView([latitude, longitude], 15)
    this.setupMap()
  }

  setupMap() {
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '<a href="https://www.openstreetmap.org/">OSM</a>',
      maxZoom: 19
    }).addTo(this.map)
  }

  addMarker({ latitude, longitude }) {
    const marker = window.L.marker([latitude, longitude])
    marker.addTo(this.map)
  }
}
