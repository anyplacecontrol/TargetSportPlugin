import React from 'react'
import PropTypes from 'prop-types'

export const MainBlock = ({className: cls, style, children}) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        paddingTop: '2.5vh'
      }}
    >
      {children}
    </div>
  )
}

MainBlock.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
