import React from 'react'
import {getBrandingStyle} from '../../utils/brandingStyles'
import PropTypes from 'prop-types'
const getCursorStyle = (onClick) => {
  return onClick ? {cursor: 'pointer'} : {cursor: 'default'}
}

export const Link = ({style, onClick, text, isCenter, isBig}) => {
  return (
    <div
      className={`${isBig ? 'font-40' : 'font-30'} ${isCenter ? 'text-center' : ''} `}
      style={{...getBrandingStyle('secondaryText'), ...getCursorStyle(onClick), ...style}}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

Link.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isCenter: PropTypes.bool,
  isBig: PropTypes.bool
}
