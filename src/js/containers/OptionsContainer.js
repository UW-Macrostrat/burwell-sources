import { connect } from 'react-redux'
import { openOptions, closeOptions, selectScale, changeView, toggleMenu } from '../actions'
import Options from '../components/Options'

const mapStateToProps = state => {
  return {
    optionsOpen: state.handleInteraction.optionsOpen,
    optionsAnchorElement: state.handleInteraction.optionsAnchorElement,
    selectedScale: state.handleInteraction.selectedScale,
    view: state.handleInteraction.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openOptions: (event) => {
      dispatch(openOptions(event))
    },
    closeOptions: () => {
      dispatch(closeOptions())
    },
    selectScale: (scale) => {
      dispatch(selectScale(scale))
      dispatch(closeOptions())
    },
    changeView: (view) => {
      dispatch(changeView(view))
      dispatch(closeOptions())
      dispatch(toggleMenu(false))
    }
  }
}

const OptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options)

export default OptionsContainer
