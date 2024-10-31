import React from 'react'
import PropTypes from 'prop-types'
import * as u from '../../utils/sharedFunctions'
import {getBrandingStyle} from '../../utils/brandingStyles'

export const Link = ({withDecoration, style, onClick, text, isCenter, isBig}) => {
  const cls = u.createClass(
    ``,
    {
      'cur-pointer': onClick,
      'font-40': isBig,
      'font-30': !isBig,
      'text-center': isCenter,
      'dec-under': withDecoration,
    }
  )

  return (
    <div
      className={cls}
      style={{...style, ...getBrandingStyle(`secondaryText`)}}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

Link.propTypes = {
  withDecoration: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isCenter: PropTypes.bool,
  isBig: PropTypes.bool
}
