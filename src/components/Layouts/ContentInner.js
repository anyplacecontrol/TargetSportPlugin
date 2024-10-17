import React from 'react'
import PropTypes from 'prop-types'
import {createClass} from '../../shared/utils/sharedFunctions'

export const ContentInner = ({className: cls, style, children}) => {
  return (
    <div
      className={createClass(`content-inner`, {}, cls)}
      style={style}
    >
      {children}
    </div>
  )
}

ContentInner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
