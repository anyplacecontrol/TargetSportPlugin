import React from 'react'
import PropTypes from 'prop-types'
import {strings} from './strings'

export const InputField = ({onCancelKeyboard, text, setText, inputRef}) => {
  return (
    <form className="search__form ">
      <button
        className="search__form--cancel "
        type="button"
        onClick={onCancelKeyboard}
      />
      <div className="search__form--inner relative w-full">
        <input
          id="emailInput"
          className="search__form--input "
          type="search"
          placeholder={strings.PleaseTypeIn}
          onInput={(event) => {
            setText(event.target.value)
          }}
          value={text}
          ref={inputRef}
          readOnly
        />
      </div>
    </form>
  )
}

InputField.propTypes = {
  inputRef: PropTypes.any,
  onCancelKeyboard: PropTypes.func.isRequired,
  text: PropTypes.string,
  setText: PropTypes.func
}
