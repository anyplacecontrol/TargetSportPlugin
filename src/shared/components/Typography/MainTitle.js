import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {useTheme} from '../../hooks/useTheme'
import * as u from '../../utils/sharedFunctions'

export const MainTitle = ({isTextLeft, className: cls, style, children}) => {
  const {isDarkBackground} = useTheme()

  if (!children) return null

  const attr = {
    className: u.createClass(`brand-h1 font-60`, {'--left': isTextLeft}, cls),
    style: {
      ...style,
      ...isDarkBackground
        ? getBrandingStyle(`whiteForeground`)
        : getBrandingStyle(`blackText`)
    },
    children
  }

  return <div {...attr} />
}

MainTitle.propTypes = {
  isTextLeft: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.any,
  isLightBackground: PropTypes.bool
}
