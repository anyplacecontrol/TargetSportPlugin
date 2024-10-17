import React from 'react'
import {ClickableCard} from '../../shared/components/ClickableCards'
import PropTypes from 'prop-types'

export const MembershipCard = ({style}) => {
  return (
    <ClickableCard
      onClick={null}
      title={[`Don't have a membership?`]}
      subtitle={['Scan here to sign up on your phone.', 'See you back here in 2 minutes!']}
      img={require(`../../assets/img/membership-qr.jpeg`)}
      style={style}
    />
  )
}

MembershipCard.propTypes = {
  style: PropTypes.object
}
