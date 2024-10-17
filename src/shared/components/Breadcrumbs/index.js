import React from 'react'
import PropTypes from 'prop-types'
import {getBrandingStyle} from '../../../shared/utils/brandingStyles'
import BackButton from '../../../shared/components/BackButton'
import {createClass} from '../../../shared/utils/sharedFunctions'

export const Breadcrumbs = ({isHidden, backPath, children, className: cls, text}) => {
  if (isHidden || (!children && !text)) return null

  return (
    <div className={createClass(`breadcrumbs`, {back: backPath, sort: children}, cls)}>
      <div className={`breadcrumbs-inner`}>
        <BackButton backPath={backPath} />

        {text && (
          <div
            className={createClass(`breadcrumbs-h1`, {}, 'font-60')}
            style={getBrandingStyle(`blackText`)}
          >
            {text}
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

Breadcrumbs.propTypes = {
  isHidden: PropTypes.bool,
  backPath: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  isVideo: PropTypes.string,
  text: PropTypes.string
}
