import React from 'react'
import PropTypes from 'prop-types'
import {BtnBig, BtnStd} from '../Buttons'
import {createClass} from '../../utils/sharedFunctions'

export const ButtonsRender = ({isHidden, isVertical, className: cls, buttons, children}) => {
  if (isHidden || !buttons) return null

  if (isVertical) {
    return (
      <div className={createClass(`col-cen-cen w-full`, {'--vertical-buttons': isVertical}, cls)}>
        {buttons.map((button, i) => {
          if (!button) return null
          const {isHidden, theme, onClick, title, disabled} = button
          const themeTmp = theme || i + 1 !== buttons.length ? `accentButton` : `additionalButton`

          return (
            <BtnBig
              key={`button-#${i}`}
              isHidden={isHidden}
              theme={button.theme || themeTmp}
              onClick={onClick}
              disabled={disabled}
            >
              {title}
            </BtnBig>
          )
        })}
        {children}
      </div>
    )
  }

  return (
    <div className={`w-full ${cls || ``}`}>
      <div className={`w-full grid-core grid-2 --center`}>
        {buttons.map(({isHidden, theme, onClick, title, disabled}, i) => {
          const themeTmp = theme || i + 1 !== buttons.length ? `grayButton` : `primaryButton`

          return (
            <BtnStd
              key={`grid-button-#${i}`}
              isHidden={isHidden}
              theme={themeTmp}
              onClick={onClick}
              disabled={disabled}
            >
              {title}
            </BtnStd>
          )
        })}
      </div>
    </div>
  )
}

ButtonsRender.propTypes = {
  isHidden: PropTypes.bool,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
  buttons: PropTypes.any,
  children: PropTypes.any
}
