import React from 'react'
import {ClickableCard} from '../../shared/components/ClickableCards'
import PropTypes from 'prop-types'
import {strings} from './strings'

export const MembershipCard = ({style}) => {
  return (
    <ClickableCard
      title={[strings.noMembership]}
      subtitle={[strings.scanToSignUp, strings.seeYouSoon]}
      img={require(`../../assets/img/TargetSports_New_Member_QR_Code.png`)}
      style={style}
    />
  )
}

MembershipCard.propTypes = {
  style: PropTypes.object
}
