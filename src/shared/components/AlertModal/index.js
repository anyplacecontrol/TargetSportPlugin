import React from 'react'
import {hideAlert} from '../../redux/baseUi'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {useDispatch} from 'react-redux'
import {ModalOverlay} from '../ModalOverlay'
import {MainTitle} from '../Typography/MainTitle'
import {ModalBody} from '../ModalBody'
import {BtnBig} from '../Buttons'
import {createClass} from '../../utils/sharedFunctions'
import PropTypes from 'prop-types'

export const AlertModal = ({defaultButtonHandler, alertData, isHandicappedMode}) => {
  const dispatch = useDispatch()

  if (!alertData) return null

  function renderButtons() {
    const handleClick = (onClick) => {
      if (onClick) onClick()
      dispatch(hideAlert())
    }

    const renderButton = (text, onClick, key = null) => (
      <BtnBig
        key={key}
        theme="primaryButton"
        className="modal-button"
        onClick={() => handleClick(onClick)}
      >
        {text}
      </BtnBig>
    )

    if (!alertData.buttons) {
      return renderButton('OK', defaultButtonHandler)
    }

    return alertData.buttons.map((button, index) => renderButton(button.text, button.onClick, index))
  }

  const {caption, text} = alertData

  const getRegEx = /Failed to fetch/g
  const isFailed = text.match(getRegEx)

  return (
    <ModalOverlay isHandicappedMode={isHandicappedMode}>
      <ModalBody className={`--alert`}>
        <div className={`modal-title-box`}>
          <MainTitle
            className={`--no-mar-t`}
            style={getBrandingStyle(`blackText`)}
          >
            {caption}
          </MainTitle>
          <div
            className={createClass(`modal-alert-info`, {'--is-long-error': isFailed})}
            style={getBrandingStyle(`blackText`)}
          >
            {text}
          </div>
        </div>
        {renderButtons()}
      </ModalBody>
    </ModalOverlay>
  )
}

AlertModal.propTypes = {
  defaultButtonHandler: PropTypes.func, //this handler will be used if alertData.buttons are not defined
  alertData: PropTypes.object,
  isHandicappedMode: PropTypes.bool
}
