import React, { Component, PropTypes } from 'react'
import ContentConatiner from '../containers/ContentContainer'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import other components

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider>
        <ContentConatiner/>
      </MuiThemeProvider>


    )
  }
}

export default App
