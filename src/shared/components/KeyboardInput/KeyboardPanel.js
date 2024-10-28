import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import Keyboard, {KeyboardButton, LatinLayout} from 'react-screen-keyboard'

export const KeyboardPanel = ({inputNode, onSubmitKeyboard}) => {
  const {onKeyboardButtonClick, onComClick} = useButtonsHandlers(inputNode)

  if (!inputNode) return null

  const KeyboardButtonRender = (str) => {
    if (!str) return null

    return (
      <KeyboardButton
        key={str}
        onClick={() => onKeyboardButtonClick(str)}
        value={str}
      />
    )
  }

  return (
    <Keyboard
      inputNode={inputNode}
      layouts={[LatinLayout]}
      leftButtons={[
        KeyboardButtonRender(`_`),
        KeyboardButtonRender(`-`),
        KeyboardButtonRender(`.`),
      ]}
      rightButtons={[
        KeyboardButtonRender(`@`),
        <KeyboardButton
          key=".com"
          onClick={() => onComClick()}
          value=".com"
        />,
        <KeyboardButton
          key="2"
          onClick={onSubmitKeyboard}
          value="Done"
          classes="keyboard-submit-button"
        />
      ]}
    />
  )
}

KeyboardPanel.propTypes = {
  onSubmitKeyboard: PropTypes.func.isRequired,
  inputNode: PropTypes.any
}

const useButtonsHandlers = (inputNode) => {
  return useMemo(() => {
    const onKeyboardButtonClick = (char) => {
      let value = inputNode.value
      let selectionStart = inputNode.selectionStart
      let selectionEnd = inputNode.selectionEnd

      inputNode.value = value.substring(0, selectionStart) + char + value.substring(selectionEnd)

      setTimeout(function () {
        inputNode.focus()
        inputNode.setSelectionRange(selectionStart + 1, selectionStart + 1)
      }, 0)
      inputNode.dispatchEvent(new Event('input', {bubbles: true}))
    }

    const onComClick = () => {
      onKeyboardButtonClick('.')
      onKeyboardButtonClick('c')
      onKeyboardButtonClick('o')
      onKeyboardButtonClick('m')
    }

    return {onKeyboardButtonClick, onComClick}
  }, [inputNode])
}
