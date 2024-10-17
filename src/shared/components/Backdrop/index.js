import React from 'react'
import {getBrandingStyle} from '../../utils/brandingStyles'

export const Backdrop = () => {
  return (
    <div className={`loading`}>
      <div
        className={`loading-bg`}
        style={{...getBrandingStyle(`darkestBackground`), opacity: `0.65`}}
      />
      <div className={`loading-inner`} />
    </div>
  )
}
