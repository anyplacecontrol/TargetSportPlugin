import React from 'react'
import * as c from '../../const'
import {ClickableCardsList, SimpleCard} from '../../shared/components/ClickableCards'
import {Layout} from '../../components/Layout'
import {MembershipCard} from '../../components/MembershipCard'
import {useKeyboard} from '../../shared/hooks/useKeyboard'
import {KeyboardInput} from '../../shared/components/KeyboardInput'
import {LeavePluginLink} from '../../components/LeavePluginLink'
import {ButtonsRender} from '../../shared/components/ButtonsRender'
import {useDispatch} from 'react-redux'
import * as membershipActions from '../../redux/modules/membership'
import {FormField} from '../../components/Form/FormField'

export const Login = () => {
  const dispatch = useDispatch()
  const onLoginClick = () => {
    dispatch(membershipActions.loginToMembership(keyboardEmail.inputText, keyboardPassword.inputText))
  }

  const keyboardEmail = useKeyboard()
  const keyboardPassword = useKeyboard()

  return (
    <>
      {keyboardEmail.isKeyboardVisible && (
        <KeyboardInput
          onCancelKeyboard={keyboardEmail.onCancelKeyboard}
          onDoneClick={keyboardEmail.onDoneKeyboard}
          text={keyboardEmail.inputText}
        />
      )}
      {keyboardPassword.isKeyboardVisible && (
        <KeyboardInput
          onCancelKeyboard={keyboardPassword.onCancelKeyboard}
          onDoneClick={keyboardPassword.onDoneKeyboard}
          text={keyboardPassword.inputText}
        />
      )}
      <Layout
        headerText={'Enter Your ACME Membership Credentials to Get Started'}
      >
        <ClickableCardsList>
          <SimpleCard>
            <FormField
              label={`Email Address`}
              placeHolderText={`Enter your email address`}
              inputText={keyboardEmail.inputText}
              onInputChange={keyboardEmail.onInputChange}
              onShowKeyboard={keyboardEmail.onShowKeyboard}
              errorText={keyboardEmail.error}
            />
            <FormField
              label={`Password`}
              type={c.FIELD_TYPE_PASSWORD}
              placeHolderText={`Enter your password`}
              inputText={keyboardPassword.inputText}
              onInputChange={keyboardPassword.onInputChange}
              onShowKeyboard={keyboardPassword.onShowKeyboard}
              errorText={keyboardPassword.error}
            />
            <ButtonsRender
              isVertical
              buttons={[
                {
                  onClick: () => {
                    onLoginClick()
                  },
                  title: 'Submit',
                  theme: 'accentButton'
                }
              ]}
            />
          </SimpleCard>

          <MembershipCard />
        </ClickableCardsList>

        <LeavePluginLink />
      </Layout>
    </>
  )
}
