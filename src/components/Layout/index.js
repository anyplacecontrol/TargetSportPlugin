import React from 'react'
import {useTheme} from '../../shared/hooks/useTheme'
import {ContentInner} from '../Layouts/ContentInner'
import {MainBlock} from '../Layouts/MainBlock'
import {getBrandingStyle} from '../../shared/utils/brandingStyles'
import {Breadcrumbs} from '../../shared/components/Breadcrumbs'

export const Layout = ({children, className, style, hideBreadcrumbs, breadcrumbsCls, headerText, backPath}) => {
  const cls = className || `v2` //v3
  const {isDarkBackground} = useTheme()

  return (
    <>
      <ContentInner style={getBrandingStyle(isDarkBackground ? `darkestBackground` : `lightBackground`)}>
        {!hideBreadcrumbs && (
          <Breadcrumbs
            className={breadcrumbsCls}
            text={headerText}
          />
        )}
        <MainBlock
          className={cls}
          style={style}
        >
          {children}
        </MainBlock>
      </ContentInner>
    </>
  )
}
