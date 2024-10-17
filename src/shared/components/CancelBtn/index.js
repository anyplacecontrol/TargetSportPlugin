import React from 'react'
import PropTypes from 'prop-types'
import * as s from '../../../svg'
import {strings} from '../../../language/strings'
import {BtnCore} from '../Buttons'
import {createClass} from '../../utils/sharedFunctions'

export const CancelBtn = (props) => {
  const {isIconBtn, isTitleBtn, text, onClickHandler} = props

  if (!onClickHandler) return null

  const attr = {
    onClick: onClickHandler
  }

  if (isIconBtn) {
    return (
      <BtnCore
        {...attr}
        theme={`accentForeground`}
        mainClass={`cancel-btn-icon`}
      >
        <s.Cancel />
      </BtnCore>
    )
  }

  return (
    <BtnCore
      {...attr}
      theme={props?.theme || `cancelButton`}
      mainClass={createClass(`modal-close-btn`, {'--title-btn': isTitleBtn})}
    >
      {text || strings.CancelButtonText}
    </BtnCore>
  )
}

CancelBtn.propTypes = {
  theme: PropTypes.string,
  isIconBtn: PropTypes.bool,
  isTitleBtn: PropTypes.bool,
  text: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired
}
