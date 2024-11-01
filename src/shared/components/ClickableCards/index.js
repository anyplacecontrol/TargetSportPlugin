import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {getBrandingStyle} from '../../utils/brandingStyles'
import * as s from '../../../svg'
import * as u from '../../utils/sharedFunctions'

export const clsClickableCard = ({noShadow, onClick}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isHandicappedMode = useSelector((state) => state.ui.isHandicappedMode)

  return u.createClass(
    `row-bet-cen bg-white round-std-x2 text-left w-full gap-h-1`,
    {
      'shad-card': !noShadow,
      'cur-point': onClick,
      'pad-v-3 pad-h-2x5': !isHandicappedMode,
      'pad-v-1x5 pad-h-1x5': isHandicappedMode,
    }
  )
}
export const CLS_CLICKABLE_CARD_TITLE = `col-sta-sta font-50 gap-v-0x25`

export const ClickableCardsList = ({children, bigGap, noPadBottom}) => {
  return (
    <div className={u.createClass(
      `col-sta-sta w-full pad-l-0x5`,
      {
        'pad-b-1x5': !noPadBottom,
        'gap-v-2': !bigGap,
        'gap-v-std': bigGap,
      }
    )}>
      {children}
    </div>
  )
}

ClickableCardsList.propTypes = {
  children: PropTypes.node.isRequired,
  bigGap: PropTypes.bool,
  noPadBottom: PropTypes.bool
}

export const ClickableCard = (props) => {
  const {noShadow, onClick, title, subtitle, img, icon, bigIcon, useRightArrow, style} = props

  const generalStyle = getBrandingStyle(`blackText`)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isHandicappedMode = useSelector((state) => state.ui.isHandicappedMode)

  const RenderTitle = () => {
    if (!title) return null

    return (
      <div
        className={`col-sta-sta font-50 gap-v-0x25`}
        style={generalStyle}
      >
        {title.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    )
  }

  const RenderSubtitle = () => {
    if (!subtitle) return null

    return (
      <div
        className={`col-sta-sta font-40 wei-regular gap-v-0x25`}
        style={generalStyle}
      >
        {subtitle.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    )
  }

  const RenderImage = () => {
    if (!img) return null

    return (
      <img
        className={`round-std`}
        style={{width: `20.5%`}}
        src={img}
        alt={`card image`}
      />
    )
  }

  const RenderIcon = () => {
    if (!useRightArrow) return null

    const clsIcon = isHandicappedMode
      ? `sqr-1x5`
      : bigIcon
        ? `sqr-3x75`
        : `sqr-2x5`
    const style = getBrandingStyle(`accentForeground`)
    const Icon = icon ? icon : s.ArrowRight

    return (
      <Icon className={clsIcon} style={style} />
    )
  }

  return (
    <div
      className={clsClickableCard({noShadow, onClick})}
      onClick={onClick}
      style={style}
    >
      <div className={`col-sta-sta w-full gap-v-1`}>
        {RenderTitle()}
        {RenderSubtitle()}
      </div>
      {RenderImage()}
      {RenderIcon()}
    </div>
  )
}

ClickableCard.propTypes = {
  noShadow: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.any,
  icon: PropTypes.any,
  bigIcon: PropTypes.bool,
  useRightArrow: PropTypes.bool,
  style: PropTypes.object
}

export const SimpleCard = ({bigGap, onClick, children}) => {
  const RenderContent = () => {
    const Comp = onClick ? `span` : `div`

    return (
      <Comp className={u.createClass(
        `col-sta-cen w-full`,
        {
          'gap-v-2': !bigGap,
          'gap-v-std': bigGap,
        }
      )}>
        {children}
      </Comp>
    )
  }

  if (onClick)
    return (
      <button
        className={clsClickableCard({onClick})}
        type={`button`}
        onClick={onClick}
      >
        {RenderContent()}
      </button>
    )

  return (
    <div className={clsClickableCard({noShadow: true})}>
      {RenderContent()}
    </div>
  )
}

SimpleCard.propTypes = {
  bigGap: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.object
}
