import React, { PropTypes } from 'react'

import IndexMapContainer from '../containers/IndexMapContainer'
import IndexMapInfoContainer from '../containers/IndexMapInfoContainer'
import HeaderContainer from '../containers/HeaderContainer'
import FeatureListContainer from '../containers/FeatureListContainer'

const Content = ({ view }) => {
  return (
    <div className='full-height'>
      <HeaderContainer/>
      { view === 'map'
        ? <IndexMapContainer/>
        : <FeatureListContainer/>
      }
      <IndexMapInfoContainer/>
    </div>
  )
}

export default Content
