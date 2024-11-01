import React from 'react'
import * as c from '../../const'
import * as s from '../../svg'
import {ClickableCardsList, ClickableCard} from '../../shared/components/ClickableCards'
import {Layout} from '../../components/Layout'
import {MembershipCard} from '../../components/MembershipCard'
import {useDispatch} from 'react-redux'
import {goto_Path} from '../../redux/modules/routing'
import {LeavePluginLink} from '../../components/LeavePluginLink'
import {strings} from './strings'

export const Home = () => {
  const dispatch = useDispatch()
  return (
    <Layout
      headerText={strings.pageHeader.replace('xx', c.MEMBERSHIP_DISCOUNT)}
    >
      <ClickableCardsList noPadBottom bigGap>
        <ClickableCard
          onClick={() => {
            dispatch(goto_Path(c.LINK_LOGIN))
          }}
          title={[strings.areYouMember]}
          subtitle={[strings.getDiscount.replace('xx', c.MEMBERSHIP_DISCOUNT)]}
          icon={s.ArrowThickRight}
          bigIcon
          useRightArrow
          noShadow
        />

        <MembershipCard isGrayBg />
      </ClickableCardsList>

      <LeavePluginLink />
    </Layout>
  )
}
