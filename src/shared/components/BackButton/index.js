import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import * as routing from '../../../redux/modules/routing'
import {strings} from './strings'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {MainTitle} from '../Typography/MainTitle'
import * as u from '../../utils/sharedFunctions'

const BackButton = ({inline, buttonText, title, onClick, backPath}) => {
  const dispatch = useDispatch()

  const onButtonClick = () => {
    if (onClick) {
      onClick()
    }

    if (backPath) {
      dispatch(routing.goto_Path(backPath))
    }

    return null
  }

  const customBgStyle = getBrandingStyle(`grayButton`)
  const showBtn = u.toBool(backPath && backPath !== '' && backPath !== `-`)

  const ButtonCore = (className) => {
    return (
      <button
        className={u.createClass(`btn-back`, {}, className)}
        style={customBgStyle}
        type={`button`}
        onClick={onButtonClick}
      >
        <span
          className={`btn-back-triangle`}
          style={customBgStyle}
        />
        <span className={`relative`}>{buttonText || strings.Back}</span>
      </button>
    )
  }

  if (inline) {
    return (
      <div className={`row-sta-cen w-full gap-h-2`}>
        {ButtonCore(`--inline`)}
        {title && (
          <MainTitle
            isTextLeft
            className={`--no-mar-t`}
          >
            {title}
          </MainTitle>
        )}
      </div>
    )
  }

  return showBtn && ButtonCore(`--std`)
}

BackButton.propTypes = {
  inline: PropTypes.bool,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  backPath: PropTypes.string,
  onClick: PropTypes.func
}

export default BackButton
