import { combineReducers } from 'redux'
import { PAGE_CLICK, REQUEST_DATA, RECIEVE_DATA, SELECT_SCALE, SELECT_FEATURES, ACTIVATE_FEATURE, TOGGLE_MENU, OPEN_OPTIONS, CLOSE_OPTIONS, CHANGE_VIEW } from '../actions'

const handleInteraction = (state = {
  isFetching: false,
  msg: '',
  clicks: 0,
  maps: [],
  selectedScale: 'large',
  selectedFeatures: [],
  activeFeature: {},
  menuOpen: false,
  optionsOpen: false,
  optionsAnchorElement: {},
  view: 'map'
}, action) => {

  switch (action.type) {
    case PAGE_CLICK:
      return Object.assign({}, state, {
        msg: action.msg,
        clicks: state.clicks + 1
      })
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIEVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        maps: action.maps
      })
    case SELECT_SCALE:
      return Object.assign({}, state, {
        selectedScale: action.selectedScale
      })
    case SELECT_FEATURES:
      return Object.assign({}, state, {
        selectedFeatures: action.selectedFeatures
      })
    case ACTIVATE_FEATURE:
      return Object.assign({}, state, {
        activeFeature: action.activeFeature
      })
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        menuOpen: action.menuOpen
      })
    case OPEN_OPTIONS:
      return Object.assign({}, state, {
        optionsOpen: true,
        optionsAnchorElement: action.optionsAnchorElement
      })
    case CLOSE_OPTIONS:
      return Object.assign({}, state, {
        optionsOpen: false
      })
    case CHANGE_VIEW:
      return Object.assign({}, state, {
        view: action.view
      })
    default:
      return state
  }
}



const reducers = combineReducers({
  // list reducers here
//  stats,
  handleInteraction
})

export default reducers
