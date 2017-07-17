import { connect } from 'react-redux'
import { selectScale } from '../actions'
import Header from '../components/Header'

const mapStateToProps = state => {
  return {
    selectedScale: state.handleInteraction.selectedScale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectScale: (event, index, scale) => {
      dispatch(selectScale(scale))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
