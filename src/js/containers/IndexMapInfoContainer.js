import { connect } from 'react-redux'
import { activateFeature, toggleMenu } from '../actions'
import IndexMapInfo from '../components/IndexMapInfo'

const mapStateToProps = state => {
  return {
    features: state.handleInteraction.selectedFeatures,
    activeFeature: state.handleInteraction.activeFeature,
    menuOpen: state.handleInteraction.menuOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    activateFeature: (feature) => {
      dispatch(activateFeature(feature))
    },
    closeMenu: () => {
      dispatch(toggleMenu(false))
    }
  }
}

const IndexMapInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexMapInfo)

export default IndexMapInfoContainer
