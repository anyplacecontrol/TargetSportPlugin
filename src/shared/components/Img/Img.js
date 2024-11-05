//Image that caches base64 of picture to memory and uses it next time to display picture
import React from 'react'
import PropTypes from 'prop-types'
import {useCachedImage} from './hooks'

export const Img = ({isHidden, src, className, style, alt, onClick, cacheImages}) => {
  const cachedImg = useCachedImage(src, cacheImages)

  if (isHidden || !src) return null

  return (
    <img
      className={className}
      style={style}
      src={cachedImg}
      alt={alt}
      onClick={onClick}
    />
  )
}

Img.propTypes = {
  isHidden: PropTypes.bool,
  src: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  cacheImages: PropTypes.bool
}
