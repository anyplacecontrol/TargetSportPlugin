import React from 'react'
import {useSelector} from 'react-redux'
import {Backdrop} from '../../shared/components/Backdrop'

export const ModalDialogs = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  return <>{isLoading && <Backdrop />}</>
}
