import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {ArrowRight} from '../../../svg'

export const ClickableCard = ({onClick, title, subtitle, img, useRightArrow, style}) => {
  return (
    <div
      className={`coupon`}
      onClick={onClick}
      style={{
        ...style,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <span style={{width: '100%'}}>
        {title && (
          <div
            className={`font-50 `}
            style={getBrandingStyle(`blackText`)}
          >
            {title.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
        {subtitle && (
          <>
            <br />
            <div
              className={`font-30 wei-regular `}
              style={getBrandingStyle(`blackText`)}
            >
              {subtitle.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </span>
      {img && (
        <img
          className={`coupon-image`}
          src={img}
          alt={`card image`}
        />
      )}
      {useRightArrow && (
        <ArrowRight
          className={`coupon-arrow`}
          style={getBrandingStyle(`grayText`)}
        />
      )}
    </div>
  )
}

ClickableCard.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.any,
  useRightArrow: PropTypes.bool,
  style: PropTypes.object
}

export const SimpleCard = ({onClick, children, style}) => {
  return (
    <div
      className={`coupon`}
      onClick={onClick}
      style={{
        ...style,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <span style={{width: '100%'}}>{children}</span>
    </div>
  )
}

SimpleCard.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.object
}
//================================================
export const ClickableCardsList = ({children}) => {
  return <div className={`coupons`}>{children}</div>
}

ClickableCardsList.propTypes = {
  children: PropTypes.node.isRequired
}
