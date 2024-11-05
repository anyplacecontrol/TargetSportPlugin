import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../utils/brandingStyles'
import {Img} from '../Img/Img'

export const InfoImage = ({isHidden, img, icon, iconComponent, backgroundColor, className, cacheImages}) => {
  if (isHidden || !(img || icon || iconComponent)) return null

  function renderImg() {
    if (iconComponent) return iconComponent

    if (img?.src) {
      return (
        <Img
          src={img.src}
          alt={`main block icon`}
          cacheImages={cacheImages}
        />
      )
    }

    const Icon = icon
    if (Icon) return <Icon style={getBrandingStyle(`infoIconForeground`)} />
  }

  return (
    <>
      <div
        className={className || `main-block-icon-box`}
        style={getBrandingStyle(backgroundColor || `darkBackground`)}
        onClick={img?.onClick}
      >
        {renderImg()}
      </div>
    </>
  )
}

InfoImage.propTypes = {
  isHidden: PropTypes.bool,
  img: PropTypes.shape({
    src: PropTypes.string,
    isArrow: PropTypes.bool,
    onClick: PropTypes.func
  }),
  icon: PropTypes.any,
  iconComponent: PropTypes.any,
  backgroundColor: PropTypes.string,
  cacheImages: PropTypes.bool
}
