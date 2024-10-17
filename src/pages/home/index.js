import React from 'react'
import {ClickableCardsList, ClickableCard} from '../../shared/components/ClickableCards'
import {Layout} from '../../components/Layout'
import {MembershipCard} from '../../components/MembershipCard'
import {MEMBERSHIP_DISCOUNT} from '../../const'
import {useDispatch} from 'react-redux'
import {goto_Path} from '../../redux/modules/routing'
import {LINK_LOGIN} from '../../const/links'
import {LeavePluginLink} from '../../components/LeavePluginLink'

export const Home = () => {
  const dispatch = useDispatch()
  return (
    <Layout headerText={'ACME Members Get a 10% Discount!'}>
      <ClickableCardsList>
        <ClickableCard
          onClick={() => {
            dispatch(goto_Path(LINK_LOGIN))
          }}
          title={['Are you an ACME Member?']}
          subtitle={[`Sign in to get your ${MEMBERSHIP_DISCOUNT}% discount!`]}
          useRightArrow={true}
          style={{boxShadow: 'none'}}
        />
        <MembershipCard style={{backgroundColor: '#dadee9', boxShadow: 'none'}} />
      </ClickableCardsList>
      <LeavePluginLink />
    </Layout>
  )
}
