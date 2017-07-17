import { connect } from 'react-redux'
import Content from '../components/Content'

const mapStateToProps = state => {
  return {
    view: state.handleInteraction.view
  }
}
const ContentContainer = connect(
  mapStateToProps
)(Content)

export default ContentContainer
