import React, { PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import OptionsContainer from '../containers/OptionsContainer'

const Header = ({ selectedScale, selectScale }) => (
  <Toolbar className='header'>
    <ToolbarGroup>
      <ToolbarTitle className='title' text='Macrostrat - map sources'></ToolbarTitle>
    </ToolbarGroup>
    <ToolbarGroup>
      <OptionsContainer/>
    </ToolbarGroup>
  </Toolbar>
)

export default Header
