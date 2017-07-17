import React, { PropTypes } from 'react'

const ScaleButton = ({ onClick, selectedScale, scale }) => (
  <div className='filter-button'
    onClick={onClick}
    style={{
      backgroundColor: (scale === selectedScale) ? '#ffffff' : '#dddddd'
    }}
  >
    {scale}
  </div>
)

ScaleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedScale: PropTypes.string.isRequired,
  scale: PropTypes.string.isRequired
}

export default ScaleButton
