import React from 'react'
import {CMD_GO_FORWARD} from '../../shared/const/pluginCommands'
import {sendMessageToParent} from '../../shared/utils/sharedFunctions'
import {Link} from '../../shared/components/Link'
import {strings} from './strings'

export const LeavePluginLink = () => {
  return (
    <Link
      text={strings.continueWithoutDiscount}
      onClick={() => {
        sendMessageToParent(CMD_GO_FORWARD)
      }}
      isBig
      isCenter
      withDecoration
    />
  )
}
