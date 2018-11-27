import fetch from 'isomorphic-fetch'
import { addCommas, settings } from '../utils'

// Define constants to be passed with actions
export const RECIEVE_DATA = 'RECIEVE_DATA'
export const REQUEST_DATA = 'REQUEST_DATA'
export const SELECT_SCALE = 'SELECT_SCALE'
export const SELECT_FEATURES = 'SELECT_FEATURES'
export const ACTIVATE_FEATURE = 'ACTIVATE_FEATURE'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const OPEN_OPTIONS = 'OPEN_OPTIONS'
export const CLOSE_OPTIONS = 'CLOSE_OPTIONS'
export const CHANGE_VIEW = 'CHANGE_VIEW'

// Define action functions
export const selectScale = (scale) => {
  return {
    type: SELECT_SCALE,
    selectedScale: scale
  }
}

export const activateFeature = (feature) => {
  return {
    type: ACTIVATE_FEATURE,
    activeFeature: feature
  }
}

export const selectFeatures = (features) => {
  return {
    type: SELECT_FEATURES,
    selectedFeatures: features
  }
}

export function requestData() {
  return {
    type: REQUEST_DATA
  }
}

export function recieveData(json) {
  return {
    type: RECIEVE_DATA,
    maps: json
  }
}

export const toggleMenu = (open) => {
  return {
    type: TOGGLE_MENU,
    menuOpen: open
  }
}

export const openOptions = (el) => {
  return {
    type: OPEN_OPTIONS,
    optionsOpen: true,
    optionsAnchorElement: el
  }
}

export const closeOptions = () => {
  return {
    type: CLOSE_OPTIONS,
    optionsOpen: false
  }
}

export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    view: view
  }
}

function formatResponse(data) {
  return data.features.map(d => {
    return d
  })
}

export const fetchData = () => {
  return function (dispatch) {

    // Update state to know what is being fetched
    dispatch(requestData())

    return fetch(`${settings.uri}/api/v2/defs/sources?all&format=geojson_bare`)
      .then(response => response.json())
      .then(formatted => formatResponse(formatted))
      .then(json => dispatch(recieveData(json)))
  }
}
