import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../shared/utils/brandingStyles'
import {InputField} from '../../shared/components/InputField'
import * as c from '../../const'
import * as s from '../../svg'

export const FormField = (props) => {
  const {
    label, type = c.FIELD_TYPE_TEXT,
    inputText, onInputChange, onShowKeyboard, errorText, placeHolderText
  } = props

  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const isPassword = type === c.FIELD_TYPE_PASSWORD

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const fieldType = () => {
    if (isPassword) {
      return isPasswordVisible ? `text` : `password`
    }

    return type
  }

  const RenderTogglePasswordBtn = () => {
    if (!isPassword) return null

    return (
      <button
        className={`col-cen-cen bg-transparent abs-r abs-center-y`}
        style={{
          right: `1rem`,
          width: `4rem`,
          height: `4rem`
        }}
        type={`button`}
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <s.Eye className={`img-size-std`} />
        ) : (
          <s.EyeSlash className={`img-size-std`} />
        )}
      </button>
    )
  }

  return (
    <div className={`col-sta-cen w-full gap-v-1`}>
      {label && (
        <div
          className={`font-40 w-full`}
          style={getBrandingStyle(`blackText`)}
        >
          {label}
        </div>
      )}
      <div className={`relative w-full`}>
        <InputField
          type={fieldType()}
          inputText={inputText}
          onInputChange={onInputChange}
          onShowKeyboard={onShowKeyboard}
          errorText={errorText}
          placeHolderText={placeHolderText}
          styles={
            isPassword ? {
              paddingRight: `6rem`
            } : {}
          }
        />
        {RenderTogglePasswordBtn()}
      </div>
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  inputText: PropTypes.string,
  onInputChange: PropTypes.func,
  onShowKeyboard: PropTypes.func,
  errorText: PropTypes.string,
  placeHolderText: PropTypes.string
}
