import { connect } from 'react-redux'
import { selectScale } from '../actions'
import FeatureList from '../components/FeatureList'
import { getVisibleScale } from '../utils'


const mapStateToProps = state => {
  return {
    data: getVisibleScale(state.handleInteraction.maps, state.handleInteraction.selectedScale),
    view: state.handleInteraction.view
  }
}

const FeatureListContainer = connect(
  mapStateToProps
)(FeatureList)

export default FeatureListContainer
