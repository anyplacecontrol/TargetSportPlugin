import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import * as config from '../../../config'

export const InputField = ({inputText, onShowKeyboard, onInputChange, errorText, placeHolderText}) => {
  const inputCls = `modal-input-text`

  return (
    <div className={`w-full gap-v-1`}>
      <input
        id={(Math.random() + 1).toString(36).substring(7)}
        className={`${inputCls} ${!errorText ? `` : `is--error`}`}
        style={{
          ...getBrandingStyle('grayBorder'),
          ...getBrandingStyle('blackText')
        }}
        type="text"
        placeholder={placeHolderText}
        value={inputText}
        onClick={() => {
          if (!config.useAndroidKeyboard) onShowKeyboard()
        }}
        onChange={(event) => {
          if (config.useAndroidKeyboard) onInputChange(event)
        }}
        readOnly={!config.useAndroidKeyboard}
        autoComplete="new-password"
      />

      {errorText && (
        <div
          id={`error`}
          className={`modal-error`}
        >
          {errorText}
        </div>
      )}
    </div>
  )
}

InputField.propTypes = {
  inputText: PropTypes.string,
  onShowKeyboard: PropTypes.func,
  onInputChange: PropTypes.func,
  errorText: PropTypes.string,
  placeHolderText: PropTypes.string
}
