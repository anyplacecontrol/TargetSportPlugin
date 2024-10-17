import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'

export const BtnCore = ({id, isHidden, theme, mainClass, className: cls, style = {}, onClick, disabled, children}) => {
  if (isHidden) return null

  return (
    <button
      id={id}
      className={mainClass || `btn-core ${cls}`}
      style={{...getBrandingStyle(theme), ...style}}
      type={`button`}
      onClick={onClick}
      disabled={disabled}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
        }
      }}
    >
      {children}
    </button>
  )
}

BtnCore.propTypes = {
  id: PropTypes.string,
  isHidden: PropTypes.bool,
  theme: PropTypes.string,
  mainClass: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any
}

export const BtnTiny = ({className: cls, ...props}) => BtnCore({...props, className: `${cls || ``} --tiny`})
export const BtnStd = ({className: cls, ...props}) => BtnCore({...props, className: `${cls || ``} --standard`})
export const BtnBig = ({className: cls, ...props}) => BtnCore({...props, className: `${cls || ``} --big`})
