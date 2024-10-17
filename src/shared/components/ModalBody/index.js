import React from 'react'
import PropTypes from 'prop-types'
import {createClass} from '../../utils/sharedFunctions'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {CancelBtn} from '../CancelBtn'

export const ModalBody = ({id, className: cls, onClickCancel, children}) => {
  return (
    <div
      id={id}
      className={createClass(`modal`, {'--with-out-cancel': !onClickCancel})}
      style={getBrandingStyle(`lightBackground`)}
    >
      <CancelBtn onClickHandler={onClickCancel} />
      <div className={createClass(`modal-body`, {}, cls)}>{children}</div>
    </div>
  )
}

ModalBody.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClickCancel: PropTypes.func,
  children: PropTypes.any
}
