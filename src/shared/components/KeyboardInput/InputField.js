import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {strings} from './strings'
import * as s from '../../../svg'
import * as u from '../../utils/sharedFunctions'

export const InputField = ({isPassword, onCancelKeyboard, text, setText, inputRef}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const fieldType = () => {
    if (isPassword) {
      return isPasswordVisible ? `text` : `password`
    }

    return `text`
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const RenderTogglePasswordBtn = () => {
    if (!isPassword) return null

    return (
      <button
        className={`col-cen-cen bg-transparent fg-white abs-l abs-center-y`}
        style={{
          right: `1rem`,
          width: `46px`,
          height: `46px`
        }}
        type={`button`}
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <s.Eye className={`full-sz`} />
        ) : (
          <s.EyeSlash className={`full-sz`} />
        )}
      </button>
    )
  }

  return (
    <div
      className={`relative`}
      style={{
        marginTop: `65%`,
        marginBottom: `5vh`
      }}
    >
      <input
        className={u.createClass(`modal-keyboard-input`, {'--with-eye': isPassword})}
        type={fieldType()}
        placeholder={strings.PleaseTypeIn}
        onInput={(event) => {
          setText(event.target.value)
        }}
        value={text}
        ref={inputRef}
        readOnly
      />
      <button
        className={`bg-transparent fg-white abs-r abs-center-y sqr-1x5`}
        type={`button`}
        onClick={onCancelKeyboard}
      >
        <s.Cancel className={`full-sz`} />
      </button>
      {RenderTogglePasswordBtn()}
    </div>
  )
}

InputField.propTypes = {
  isPassword: PropTypes.bool,
  inputRef: PropTypes.any,
  onCancelKeyboard: PropTypes.func.isRequired,
  text: PropTypes.string,
  setText: PropTypes.func
}
