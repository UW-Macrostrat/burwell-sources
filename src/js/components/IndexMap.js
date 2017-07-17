import React, { Component, PropTypes } from 'react'
import ScaleButton from './ScaleButton'

class IndexMap extends Component {
  constructor(props) {
    super(props)
    this.selectedFeatures = []
    this.inactiveStyle = {
      color: '#333', //stroke color
      weight: 2, //stroke width
      fillColor: '#aaaaaa'
    }

    this.activeStyle = {
      color: '#FF5335', //stroke color
      weight: 3 //stroke width
    }
    this.highlightStyle = {
      color: '#FF5335',
      weight: 3,
      fillColor: '#FF5335'
    }
    this.currentScale = ''
  }

  renderMap(nextProps) {
    if (Object.keys(nextProps.activeFeature).length) {
      Object.keys(this.map._layers).forEach(layer => {
        if (this.map._layers[layer]._layers) {
          Object.keys(this.map._layers[layer]._layers).forEach(obj => {
            if (this.map._layers[layer]._layers[obj].feature.properties.source_id === nextProps.activeFeature.source_id) {
              this.map._layers[layer]._layers[obj].setStyle(this.highlightStyle)
            } else {
              try {
                this.map._layers[layer]._layers[obj].setStyle(this.inactiveStyle)
              } catch(e) {}
            }
          })
        }
      })
    }

    if (!nextProps.maps.length) {
      return
    }
    if ((this.map && nextProps.selectedScale != this.currentScale) || !this.currentScale.length) {
      this.currentScale = nextProps.selectedScale
      this.features.clearLayers()
      this.features.addData({
        'type': 'FeatureCollection',
        'features': nextProps.maps
      })
    }

  }

  componentDidMount() {
    var map = this.map = L.map('index-map', {
      minZoom: 0,
      maxZoom: 14
    }).setView([40.8, -94.1], 3);

    this.map.on('click', (event) => {
    //  this.features.setStyle(this.inactiveStyle)
      let bounds = L.latLngBounds(event.latlng, event.latlng)
      let intersecting = []

      Object.keys(this.map._layers).forEach(layer => {
        if (this.map._layers[layer]._layers) {
          Object.keys(this.map._layers[layer]._layers).forEach(obj => {
            if (bounds.intersects(this.map._layers[layer]._layers[obj]._bounds)) {
              this.map._layers[layer]._layers[obj].setStyle(this.activeStyle)
              this.map._layers[layer]._layers[obj].bringToFront()
              intersecting.push(this.map._layers[layer]._layers[obj])
            } else {
              this.map._layers[layer]._layers[obj].setStyle(this.inactiveStyle)
            }
          })
        }
      })

      let uniques = {}
      intersecting = intersecting.map(feature => {
        return feature.feature.properties
      }).filter(feature => {
        if (!uniques[feature.source_id]) {
          uniques[feature.source_id] = true
          return feature
        }
      })

      this.props.onSelectFeatures(intersecting || [])
      this.selectedFeatures = intersecting

      if (intersecting.length) {
        this.props.openMenu()
      }
    })

    L.tileLayer("https://{s}.tiles.mapbox.com/v3/jczaplewski.j751k57j/{z}/{x}/{y}.png", {
      attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a>"
    }).addTo(map)

    var features = this.features = L.geoJson({
      'type': 'FeatureCollection',
      'features': this.props.maps
    }, {
      style: {
        color: '#333', //stroke color
        weight: 2, //stroke width
        fillColor: '#aaaaaa'
      }
    }).addTo(map)
  }

  componentWillReceiveProps(nextProps) {
    this.renderMap(nextProps)
  }

  render() {
    return (
      <div className='index-map-container'>
        <div id='index-map'></div>
      </div>
    )
  }
}

IndexMap.propTypes = {
  maps: PropTypes.array.isRequired,
  onSelectFeatures: PropTypes.func.isRequired,
  selectedFeatures: PropTypes.array.isRequired,
  openMenu: PropTypes.func.isRequired,
  activeFeature: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired
}

export default IndexMap
