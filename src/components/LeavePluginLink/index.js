import React from 'react'
import {CMD_GO_FORWARD} from '../../shared/const/pluginCommands'
import {sendMessageToParent} from '../../shared/utils/sharedFunctions'

import {Link} from '../../shared/components/Link'

export const LeavePluginLink = () => {
  return (
    <Link
      text={`Continue without Member Discount`}
      onClick={() => {
        sendMessageToParent(CMD_GO_FORWARD)
      }}
      isBig
      isCenter
    />
  )
}
