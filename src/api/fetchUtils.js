import {baseFetchJSON, baseThrowFetchError} from '../shared/utils/baseFetchUtils'

const catchFetchError = (error, response, url, init) => {
  let message = error.message ? error.message : error

  baseThrowFetchError(message, response, (init.method || 'GET') + ':' + url, [])
}

export async function fetchJSON(url, init, headers, timeout) {
  return await baseFetchJSON(
    url,
    init,
    headers || {
      'Content-Type': 'application/json'
    },
    timeout,
    catchFetchError
  )
}
