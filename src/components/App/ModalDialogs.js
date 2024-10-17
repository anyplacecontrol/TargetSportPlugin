import React from 'react'
import {useSelector} from 'react-redux'
import {Backdrop} from '../../shared/components/Backdrop'
import {AlertModal} from '../../shared/components/AlertModal'

export const ModalDialogs = () => {
  const alertData = useSelector((state) => state.ui.alertData)
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <>
      {isLoading && <Backdrop />}
      {alertData && <AlertModal alertData={alertData} />}
    </>
  )
}
