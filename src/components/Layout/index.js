import React from 'react'
import {useTheme} from '../../shared/hooks/useTheme'
import {ContentInner} from '../Layouts/ContentInner'
import {MainBlock} from '../Layouts/MainBlock'
import {getBrandingStyle} from '../../shared/utils/brandingStyles'
import {Breadcrumbs} from '../../shared/components/Breadcrumbs'

// eslint-disable-next-line react/prop-types
export const Layout = ({children, className, style, hideBreadcrumbs, breadcrumbsCls, headerText}) => {
  const {isDarkBackground} = useTheme()

  return (
    <ContentInner
      style={getBrandingStyle(isDarkBackground ? `darkestBackground` : `lightBackground`)}
    >
      <Breadcrumbs
        isHidden={hideBreadcrumbs}
        className={breadcrumbsCls}
        text={headerText}
      />

      <MainBlock className={className || `v2`} style={style}>
        {children}
      </MainBlock>
    </ContentInner>
  )
}
