import React from 'react'
import {ClickableCardsList, SimpleCard} from '../../shared/components/ClickableCards'
import {Layout} from '../../components/Layout'
import {MembershipCard} from '../../components/MembershipCard'
import {useKeyboard} from '../../shared/hooks/useKeyboard'
import {KeyboardInput} from '../../shared/components/KeyboardInput'
import {InputField} from '../../shared/components/InputField'
import {getBrandingStyle} from '../../shared/utils/brandingStyles'
import {LeavePluginLink} from '../../components/LeavePluginLink'
import {ButtonsRender} from '../../shared/components/ButtonsRender'
import {useDispatch} from 'react-redux'
import * as uiActions from '../../redux/modules/ui'

export const Login = () => {
  const dispatch = useDispatch()
  const onLoginClick = () => {
    dispatch(uiActions.showBackdrop(true))
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
      <Layout headerText={'Enter Your ACME Membership Credentials to Get Started'}>
        <ClickableCardsList>
          <SimpleCard style={{boxShadow: 'none'}}>
            <div className={`brd-transparent-2 gap-v-2`}>
              <div
                className={`font-40 `}
                style={getBrandingStyle(`blackText`)}
              >
                Email Address
              </div>
              <InputField
                inputText={keyboardEmail.inputText}
                onInputChange={keyboardEmail.onInputChange}
                onShowKeyboard={keyboardEmail.onShowKeyboard}
                errorText={keyboardEmail.error}
                placeHolderText={'Enter your email address'}
              />
              <div
                className={`font-40 `}
                style={getBrandingStyle(`blackText`)}
              >
                Password
              </div>

              <InputField
                inputText={keyboardPassword.inputText}
                onInputChange={keyboardPassword.onInputChange}
                onShowKeyboard={keyboardPassword.onShowKeyboard}
                errorText={keyboardPassword.error}
                placeHolderText={'Enter your password'}
              />
            </div>

            <br />
            <br />
            <br />
            <br />
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
          <MembershipCard style={{boxShadow: 'none'}} />
        </ClickableCardsList>

        <LeavePluginLink />
      </Layout>
    </>
  )
}
