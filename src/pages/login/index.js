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
import {strings} from './strings'

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
      <Layout headerText={strings.loginPageHeader}>
        <ClickableCardsList>
          <SimpleCard>
            <FormField
              label={strings.emailAddress}
              placeHolderText={strings.enterEmail}
              inputText={keyboardEmail.inputText}
              onInputChange={keyboardEmail.onInputChange}
              onShowKeyboard={keyboardEmail.onShowKeyboard}
              errorText={keyboardEmail.error}
            />
            <FormField
              label={strings.password}
              type={c.FIELD_TYPE_PASSWORD}
              placeHolderText={strings.enterPassword}
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
                  title: strings.submitButton,
                  theme: 'accentButton'
                }
              ]}
            />
          </SimpleCard>

          <MembershipCard style={{boxShadow: 'none'}} />
        </ClickableCardsList>

        <LeavePluginLink />
      </Layout>
    </>
  )
}
