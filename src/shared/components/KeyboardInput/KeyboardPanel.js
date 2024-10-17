import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import Keyboard, {KeyboardButton, LatinLayout} from 'react-screen-keyboard'

export const KeyboardPanel = ({inputNode, onSubmitKeyboard}) => {
  const {onKeyboardButtonClick, onComClick} = useButtonsHandlers(inputNode)

  if (!inputNode) return null

  return (
    <Keyboard
      inputNode={inputNode}
      layouts={[LatinLayout]}
      leftButtons={[
        <KeyboardButton
          key="_"
          onClick={() => onKeyboardButtonClick('_')}
          value="_"
        />,
        <KeyboardButton
          key="-"
          onClick={() => onKeyboardButtonClick('-')}
          value="-"
        />,
        <KeyboardButton
          key="."
          onClick={() => onKeyboardButtonClick('.')}
          value="."
        />
      ]}
      rightButtons={[
        <KeyboardButton
          key="@"
          onClick={() => onKeyboardButtonClick('@')}
          value="@"
        />,
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

/**
 * Buttons Handlers
 */
const useButtonsHandlers = (inputNode) => {
  return useMemo(() => {
    const onKeyboardButtonClick = (char) => {
      let value = inputNode.value
      let selectionStart = inputNode.selectionStart
      let selectionEnd = inputNode.selectionEnd

      let nextValue = value.substring(0, selectionStart) + char + value.substring(selectionEnd)

      inputNode.value = nextValue
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
