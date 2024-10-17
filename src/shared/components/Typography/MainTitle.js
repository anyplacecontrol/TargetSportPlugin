import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {useTheme} from '../../hooks/useTheme'

export const MainTitle = ({isTextLeft, className: cls, style, children}) => {
  const {isDarkBackground} = useTheme()

  if (!children) return null

  const attr = {
    className: `brand-h1 ${cls || ``} font-60 ${!isTextLeft ? `` : `--left`}`,
    style: isDarkBackground ? getBrandingStyle(`whiteForeground`) : getBrandingStyle(`blackText`),
    children
  }
  if (style) attr.style = style

  return <div {...attr} />
}

MainTitle.propTypes = {
  isTextLeft: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.any,
  isLightBackground: PropTypes.bool
}
