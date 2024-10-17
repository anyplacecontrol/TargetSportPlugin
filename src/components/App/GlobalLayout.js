import React from 'react'
import {useSelector} from 'react-redux'
import * as u from '../../shared/utils/sharedFunctions'
import * as routingFuncs from '../../redux/modules/routing'
import {getBrandingStyle} from '../../shared/utils/brandingStyles'
import {ThemeContext} from '../../shared/hooks/useTheme'
import PropTypes from 'prop-types'

export const GlobalLayout = ({children}) => {
  const {style, cls, isDarkBackground} = useSelectors()

  return (
    <div
      className={cls}
      style={style}
    >
      <ThemeContext.Provider value={{isDarkBackground}}>{children}</ThemeContext.Provider>
    </div>
  )
}
GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired
}

function useSelectors() {
  const isHandicappedMode = useSelector((state) => state.ui.isHandicappedMode)
  const isDarkBackground = useSelector((state) => routingFuncs.isDarkBackground(state))
  const isRootPage = useSelector((state) => routingFuncs.isRootPage(state))
  const style = getBrandingStyle(isDarkBackground ? `darkestBackground` : `lightBackground`)
  const cls = u.createClass(`content`, {v2: isDarkBackground}, u.isHandicappedModeCls(isHandicappedMode))

  return {isRootPage, style, cls, isDarkBackground}
}
