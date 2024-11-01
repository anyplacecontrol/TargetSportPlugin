import React from 'react'
import {ClickableCard} from '../../shared/components/ClickableCards'
import PropTypes from 'prop-types'
import {strings} from './strings'

export const MembershipCard = ({isGrayBg, style}) => {
  return (
    <ClickableCard
      title={[strings.noMembership]}
      subtitle={[strings.scanToSignUp, strings.seeYouSoon]}
      img={require(`../../assets/img/TargetSports_New_Member_QR_Code.jpg`)}
      style={{
        ...style,
        backgroundColor: isGrayBg ? '#dadee9' : '',
      }}
      noShadow
    />
  )
}

MembershipCard.propTypes = {
  isGrayBg: PropTypes.bool,
  style: PropTypes.object,
}
