import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {ArrowRight} from '../../../svg'

export const ClickableCard = ({onClick, title, subtitle, img, useRightArrow, style}) => {
  return (
    <button
      className={`coupon`}
      type={`button`}
      onClick={onClick}
      style={{
        ...style,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <span className={`w-full`}>
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
    </button>
  )
}

ClickableCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.any,
  useRightArrow: PropTypes.bool,
  style: PropTypes.object
}

export const SimpleCard = ({onClick, children}) => {
  const RenderContent = () => {
    const Comp = onClick ? `span` : `div`

    return (
      <Comp className={`col-sta-cen gap-v-2 w-full`}>
        {children}
      </Comp>
    )
  }

  if (onClick)
    return (
      <button
        className={`coupon cur-point`}
        type={`button`}
        onClick={onClick}
      >
        {RenderContent()}
      </button>
    )

  return (
    <div
      className={`coupon`}
      style={{boxShadow: `none`}}
    >
      {RenderContent()}
    </div>
  )
}

SimpleCard.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export const ClickableCardsList = ({children}) => {
  return <div className={`coupons`}>{children}</div>
}

ClickableCardsList.propTypes = {
  children: PropTypes.node.isRequired
}
