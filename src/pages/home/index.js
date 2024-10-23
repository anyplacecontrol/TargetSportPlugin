import React from 'react'
import {ClickableCardsList, ClickableCard} from '../../shared/components/ClickableCards'
import {Layout} from '../../components/Layout'
import {MembershipCard} from '../../components/MembershipCard'
import * as c from '../../const'
import {useDispatch} from 'react-redux'
import {goto_Path} from '../../redux/modules/routing'
import {LeavePluginLink} from '../../components/LeavePluginLink'
import {strings} from './strings'

export const Home = () => {
  const dispatch = useDispatch()
  return (
    <Layout headerText={strings.pageHeader.replace('xx', c.MEMBERSHIP_DISCOUNT)}>
      <ClickableCardsList>
        <ClickableCard
          onClick={() => {
            dispatch(goto_Path(c.LINK_LOGIN))
          }}
          title={[strings.areYouMember]}
          subtitle={[strings.getDiscount.replace('xx', c.MEMBERSHIP_DISCOUNT)]}
          useRightArrow={true}
          style={{boxShadow: 'none'}}
        />
        <MembershipCard style={{backgroundColor: '#dadee9', boxShadow: 'none'}} />
      </ClickableCardsList>
      <LeavePluginLink />
    </Layout>
  )
}
