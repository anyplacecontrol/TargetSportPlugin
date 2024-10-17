import {useMemo, useState} from 'react'

export function useKeyboard() {
  const [inputText, setInputText] = useState('')
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)

  return useMemo(() => {
    const onCancelKeyboard = () => {
      setIsKeyboardVisible(false)
    }

    const onDoneKeyboard = (inputText_) => {
      setInputText(inputText_)
      setIsKeyboardVisible(false)
    }

    const onShowKeyboard = () => {
      setIsKeyboardVisible(true)
      setError(null)
    }

    const onChangeError = (error_) => {
      setError(error_)
    }

    const onInputChange = (event) => {
      setInputText(event.target.value)
      setError(null)
    }

    return {
      inputText,
      isKeyboardVisible,
      error,
      onCancelKeyboard,
      onDoneKeyboard,
      onShowKeyboard,
      onInputChange,
      onChangeError
    }
  }, [error, inputText, isKeyboardVisible])
}
