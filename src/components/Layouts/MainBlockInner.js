import React from 'react'
import PropTypes from 'prop-types'
import {createClass} from '../../shared/utils/sharedFunctions'

export const MainBlockInner = ({className: cls, gapCls, style, children}) => {
  return (
    <div
      className={createClass(`main-block-inner ${gapCls || `gap-v-2`}`, {}, cls)}
      style={style}
    >
      {children}
    </div>
  )
}

MainBlockInner.propTypes = {
  className: PropTypes.string,
  gapCls: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
