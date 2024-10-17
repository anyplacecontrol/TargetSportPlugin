import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'
import * as u from '../../../shared/utils/sharedFunctions'
import {getBrandingStyle} from '../../utils/brandingStyles'

export const ModalOverlay = ({children, isHandicappedMode}) => {
  return (
    <div
      id={`modals`}
      className={u.createClass(`modals`, {}, u.isHandicappedModeCls(isHandicappedMode))}
    >
      <div className={`modals-inner`}>
        <div
          className={`modals-bg`}
          style={{...getBrandingStyle(`darkestBackground`), opacity: `0.95`}}
        />
        <table className={`modals-body`}>
          <tbody>
            <tr>
              <td className={`modals-box`}>
                <Zoom duration={500}>{children}</Zoom>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

ModalOverlay.propTypes = {
  isHandicappedMode: PropTypes.bool,
  children: PropTypes.any
}
