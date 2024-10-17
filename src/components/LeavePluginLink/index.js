import React from 'react'
import {useDispatch} from 'react-redux'

import {Link} from '../../shared/components/Link'

export const LeavePluginLink = () => {
  const dispatch = useDispatch()
  return (
    <Link
      text={`Continue without Member Discount`}
      isBig
      isCenter
    />
  )
}
