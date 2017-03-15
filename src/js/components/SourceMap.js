import React, { Component, PropTypes } from 'react'

class SourceMap extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('ready to draw', this.props.sourceId)
    var map = this.map = L.map(`map-${this.props.sourceId}`, {
      attributionControl: false,
      minZoom: 0,
      zoomControl: false
    }).setView([40.8, -94.1], 3);

    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
      zIndex: 1
    }).addTo(map)

    var bbox = L.geoJson({
      'type': 'FeatureCollection',
      'features': [ {
        'type': 'Feature',
        'properties': {},
        'geometry': this.props.geom
      } ]
    }).addTo(map)

    map.fitBounds(bbox.getBounds())
  }

  render() {
    const { geom, sourceId } = this.props

    return (
      <div className='map' id={'map-' + sourceId}></div>
    )
  }
}

SourceMap.propTypes = {
  geom: PropTypes.object.isRequired,
  sourceId: PropTypes.number.isRequired
}

export default SourceMap
