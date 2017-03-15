import React, { Component, PropTypes } from 'react'

class SourceMap extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var zoomMap = {
      'tiny': 1,
      'small': 5,
      'medium': 7,
      'large': 10
    }
    var map = this.map = L.map(`map-${this.props.feature.properties.source_id}`, {
      attributionControl: false,
      minZoom: 0,
      zoomControl: false
    }).setView([40.8, -94.1], 3);

    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
      zIndex: 1
    }).addTo(map)

    var bbox = L.geoJson({
      'type': 'FeatureCollection',
      'features': [ this.props.feature ]
    }, {
      onEachFeature: (feature, layer) => {
        layer.on('click', (e) => {
          var centerLng = (this.props.feature.geometry.coordinates[0][0][0] + this.props.feature.geometry.coordinates[0][2][0]) / 2
          var centerLat = (this.props.feature.geometry.coordinates[0][0][1] + this.props.feature.geometry.coordinates[0][2][1]) / 2
          window.location = `https://dev.macrostrat.org/burwell#${zoomMap[this.props.feature.properties.scale]}/${centerLat}/${centerLng}`
        })
      }
    }).addTo(map)


    map.fitBounds(bbox.getBounds())
  }

  render() {
    const { feature } = this.props

    return (
      <div className='map' id={'map-' + feature.properties.source_id}></div>
    )
  }
}

SourceMap.propTypes = {
  feature: PropTypes.object.isRequired
}

export default SourceMap
