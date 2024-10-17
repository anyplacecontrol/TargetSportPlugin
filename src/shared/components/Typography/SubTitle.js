import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {useTheme} from '../../hooks/useTheme'
import {createClass} from '../../utils/sharedFunctions'

export const SubTitle = ({className: cls, style, isFontRegular, isTextLeft, children}) => {
  const {isDarkBackground} = useTheme()
  if (!children) return null
  if (Array.isArray(children) && !children.length) return null

  const attr = {
    className: createClass(
      `brand-h2 font-50`,
      {
        'wei-regular': isFontRegular,
        '--left': isTextLeft
      },
      cls
    ),
    style: style ? style : isDarkBackground ? getBrandingStyle(`whiteForeground`) : getBrandingStyle(`blackText`)
  }

  return <div {...attr}>{children}</div>
}

SubTitle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.any,
  isFontRegular: PropTypes.bool,
  isTextLeft: PropTypes.bool,
  children: PropTypes.any
}
