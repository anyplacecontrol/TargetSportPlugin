import React from 'react'
import PropTypes from 'prop-types'
import * as u from '../../shared/utils/sharedFunctions'

export const MainBlock = ({className: cls, style, children}) => {
  return (
    <div
      className={u.createClass(`col-sta-str gap-v-std`, {}, cls)}
      style={style}
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
