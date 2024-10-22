import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import * as config from '../../../config'
import {createClass} from '../../utils/sharedFunctions'

export const InputField = (props) => {
  const {type = `text`, inputText, onShowKeyboard, onInputChange, errorText, placeHolderText} = props

  return (
    <div className={`w-full gap-v-1`}>
      <input
        id={(Math.random() + 1).toString(36).substring(7)}
        className={createClass(`modal-input-text`, {'is--error': errorText})}
        style={{
          ...getBrandingStyle(`grayBorder`),
          ...getBrandingStyle(`blackText`)
        }}
        type={type}
        placeholder={placeHolderText}
        value={inputText}
        onClick={() => {
          if (!config.useAndroidKeyboard) onShowKeyboard()
        }}
        onChange={(event) => {
          if (config.useAndroidKeyboard) onInputChange(event)
        }}
        readOnly={!config.useAndroidKeyboard}
        autoComplete={`new-password`}
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
  type: PropTypes.string,
  inputText: PropTypes.string,
  onShowKeyboard: PropTypes.func,
  onInputChange: PropTypes.func,
  errorText: PropTypes.string,
  placeHolderText: PropTypes.string
}
