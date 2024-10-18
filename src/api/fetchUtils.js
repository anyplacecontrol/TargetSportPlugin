import {baseFetchJSON, baseThrowFetchError} from '../shared/utils/baseFetchUtils'

export async function fetchJSON(url, init, headers, timeout) {
  const catchError = (error, response) => {
    let message = error.message ? error.message : error

    baseThrowFetchError(message, response, (init.method || 'GET') + ':' + url, [])
  }

  return await baseFetchJSON(
    url,
    init,
    headers || {
      'Content-Type': 'application/json'
    },
    timeout,
    catchError
  )
}
