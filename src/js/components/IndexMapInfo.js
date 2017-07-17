import React, { PropTypes } from 'react'
import { settings, zoomMap } from '../utils'

const widths = {
  1: 'twelve columns',
  2: 'six columns',
  3: 'four columns',
  4: 'three columns'
}
const IndexMapInfo = ({ activateFeature, features, menuOpen, closeMenu }) => (
  <div className={menuOpen ? 'info open' : 'info'}>
    <div className='info-header'>
      <div onClick={() => { closeMenu() }} className='info-close'>x</div>
    </div>
    <div className='info-content'>
      <div className='container'>
        {features.map((feature, idx) => {
          return (
            <div className={widths[features.length] || 'four columns'} key={idx} onMouseOver={() => { activateFeature(feature) }} onMouseOut={() => { activateFeature({})}}>
              <p><span className='map-source-title'>{feature.ref_title}</span>. {feature.authors}. {feature.ref_source}. <span className='map-source-year'>{feature.ref_year}</span>. Retrieved from <a href={feature.url} target='_blank'>{feature.url}</a>. <span className={"badge left scale-badge " + feature.scale}>{feature.scale}</span> Source ID: {feature.source_id}. <a href={settings.uri + '/burwell#' + zoomMap[feature.scale] + '/' + ((feature.geometry.coordinates[0][0][1] + feature.geometry.coordinates[0][2][1]) / 2) + '/' + ((feature.geometry.coordinates[0][0][0] + feature.geometry.coordinates[0][2][0]) / 2)} target='_blank'>View map</a></p>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

IndexMapInfo.propTypes = {
  activateFeature: PropTypes.func.isRequired,
  features: PropTypes.array.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default IndexMapInfo
