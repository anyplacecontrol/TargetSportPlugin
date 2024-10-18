import {isFakeAllData, REST_URL} from '../config'
import {fetchJSON} from './fetchUtils'

const membershipLogin_endPoint = REST_URL + `/login1`

const FAKE_MEMBERSHIP_NO_DISCOUNT = {
  success: true,
  hasDiscount: false,
  type: 'Normal'
}

const FAKE_MEMBERSHIP_DISCOUNT = {
  success: true,
  hasDiscount: true,
  type: 'Ammo+'
}

const FAKE_MEMBERSHIP_BAD_LOGIN = {
  success: false,
  error: 'User not valid'
}

export async function loginToMembership(email, password) {
  if (isFakeAllData) {
    return [FAKE_MEMBERSHIP_NO_DISCOUNT, FAKE_MEMBERSHIP_DISCOUNT, FAKE_MEMBERSHIP_BAD_LOGIN][
      Math.floor(Math.random() * 3)
    ]
  }

  const endPoint = membershipLogin_endPoint

  let response
  try {
    response = await fetchJSON(endPoint, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
  } catch (error) {
    throw error
  }

  if (!response || !response.body) throw new Error('Body is empty in API response')

  return response.body
}
