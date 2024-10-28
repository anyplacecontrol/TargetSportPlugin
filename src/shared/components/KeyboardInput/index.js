import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import './keyboard.css'
import {InputField} from './InputField'
import {KeyboardPanel} from './KeyboardPanel'
import {ModalOverlay} from '../ModalOverlay'

export const KeyboardInput = ({isPassword, onCancelKeyboard, onDoneClick, text, isHandicappedMode}) => {
  const [textValue, setTextValue] = useState(text)
  const [inputNode, setInputNode] = useState(null)
  const inputRef = useRef()

  useEffect(() => {
    setInputNode(inputRef.current)
  }, [])

  return (
    <ModalOverlay isHandicappedMode={isHandicappedMode}>
      <InputField
        onCancelKeyboard={onCancelKeyboard}
        text={textValue}
        setText={setTextValue}
        inputRef={inputRef}
        isPassword={isPassword}
      />

      <KeyboardPanel
        inputNode={inputNode}
        onSubmitKeyboard={() => {
          onDoneClick(textValue)
        }}
      />
    </ModalOverlay>
  )
}

KeyboardInput.propTypes = {
  isPassword: PropTypes.bool,
  isHandicappedMode: PropTypes.bool,
  onCancelKeyboard: PropTypes.func.isRequired,
  onDoneClick: PropTypes.func.isRequired, //argument is text
  text: PropTypes.string
}
