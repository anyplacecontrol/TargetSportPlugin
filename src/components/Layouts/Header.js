import React from 'react'
import PropTypes from 'prop-types'
import {createClass} from '../../shared/utils/sharedFunctions'

export const Header = ({isHidden, className: cls, style, isWithPadding, children, onClick}) => {
  if (isHidden) return null

  const attr = {
    className: createClass(`header`, {}, cls),
    style,
    onClick
  }

  return (
    <header {...attr}>
      {children && <div className={createClass(`content-width`, {'--no-pad-h': !isWithPadding})}>{children}</div>}
    </header>
  )
}

Header.propTypes = {
  isHidden: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  isWithPadding: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func
}
