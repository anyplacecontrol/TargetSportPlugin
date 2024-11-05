import React from 'react'
import PropTypes from 'prop-types'
import {TextsList} from '../TextsList'
import {InfoImage} from './InfoImage'
import {MainTitle} from '../Typography/MainTitle'
import {ButtonsRender} from '../ButtonsRender'
import * as u from '../../utils/sharedFunctions'

export const BaseInfoPanel = (props) => {
  const {
    textBeforeImage,
    headerTexts,
    texts,
    img, //img: {src, isArrow, onClick}
    buttons, // [ {title, onClick}, {title, onClick} ]
    children,
    icon,
    iconComponent,
    isBetween,
    textBeforeButton,
    cacheImages
  } = props

  // eslint-disable-next-line react/prop-types
  const RenderInfoText = ({text, cls}) => {
    if (!text) return null

    return (
      <div className={u.createClass(`font-40 text-center w-full`, {}, cls)}>
        <TextsList texts={text} />
      </div>
    )
  }

  return (
    <>
      <div className={`col-sta-cen w-full gap-v-std`}>
        <MainTitle className={isBetween ? `` : `--no-mar-t`}>
          <TextsList texts={headerTexts} />
        </MainTitle>

        {RenderInfoText({text: textBeforeImage, cls: `maw-col-6`})}

        <InfoImage
          img={img}
          icon={icon}
          iconComponent={iconComponent}
          cacheImages={cacheImages}
        />

        {RenderInfoText({text: textBeforeButton || texts})}
      </div>

      {children}

      <ButtonsRender
        isVertical
        buttons={buttons}
      />
    </>
  )
}

BaseInfoPanel.propTypes = {
  textBeforeImage: PropTypes.any,
  img: PropTypes.shape({
    src: PropTypes.string,
    isArrow: PropTypes.bool,
    onClick: PropTypes.func
  }),
  headerTexts: PropTypes.any,
  texts: PropTypes.any,
  buttons: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, onClick: PropTypes.func})),
  children: PropTypes.any,
  iconComponent: PropTypes.any,
  icon: PropTypes.any,
  isBetween: PropTypes.bool,
  textBeforeButton: PropTypes.string,
  cacheImages: PropTypes.bool
}
