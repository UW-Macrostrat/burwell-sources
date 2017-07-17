import { connect } from 'react-redux'
import { selectScale, selectFeatures, toggleMenu } from '../actions'
import IndexMap from '../components/IndexMap'
import { getVisibleScale } from '../utils'

const mapStateToProps = state => {
  return {
    maps: getVisibleScale(state.handleInteraction.maps, state.handleInteraction.selectedScale),
    selectedScale: state.handleInteraction.selectedScale,
    selectedFeatures: state.handleInteraction.selectedFeatures,
    activeFeature: state.handleInteraction.activeFeature,
    view: state.handleInteraction.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectFeatures: (features) => {
      dispatch(selectFeatures(features))
    },
    openMenu: () => {
      dispatch(toggleMenu(true))
    }
  }
}

const IndexMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexMap)

export default IndexMapContainer
