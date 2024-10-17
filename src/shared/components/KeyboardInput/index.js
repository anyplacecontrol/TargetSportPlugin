import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import './keyboard.css'
import {InputField} from './InputField'
import {KeyboardPanel} from './KeyboardPanel'
import {ModalOverlay} from '../ModalOverlay'

export const KeyboardInput = ({onCancelKeyboard, onDoneClick, text, isHandicappedMode}) => {
  const [textValue, setTextValue] = useState(text)
  const [inputNode, setinputNode] = useState(null)
  const inputRef = useRef()

  useEffect(() => {
    setinputNode(inputRef.current)
  }, [])

  return (
    <ModalOverlay isHandicappedMode={isHandicappedMode}>
      <InputField
        onCancelKeyboard={onCancelKeyboard}
        text={textValue}
        setText={setTextValue}
        inputRef={inputRef}
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
  isHandicappedMode: PropTypes.bool,
  onCancelKeyboard: PropTypes.func.isRequired,
  onDoneClick: PropTypes.func.isRequired, //argument is text
  text: PropTypes.string
}
