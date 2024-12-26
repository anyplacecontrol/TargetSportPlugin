async function baseHandleFetchError(response) {
  if (!response.ok) {
    if (response.status === 400 || response.status === 500) {
      let errorText
      try {
        errorText = await response.text()
        if (!errorText) throw '-'
      } catch (error) {
        if (response.status === 500) errorText === 'Internal Server Error'
        if (response.status === 400) errorText === 'Bad Request'
      }
      throw errorText
    } else if (response.statusText) throw response.statusText
    else throw response
  }
}

//--------------------------------------------------------------
export function baseThrowFetchError(errorMessage, response, url = '', ignoredUrls = []) {
  let errorObj = {
    errorMessage,
    status: response && response.status ? response.status : null,
    statusText: response && response.statusText ? response.statusText : null,
    url
  }

  if (typeof errorObj.errorMessage !== 'string') {
    errorObj.errorMessage = errorObj.statusText || `[${errorObj.status}] Error`
  }

  let errorAsString = JSON.stringify(errorObj)

  //check if url includes one substring listed in ignoredUrls
  for (let ignoredUrl of ignoredUrls) {
    if (url.includes(ignoredUrl)) {
      return
    }
  }

  window.logger.error('Fetch Error', errorAsString, 'throwFetchError')
  throw Error(errorAsString)
}
//--------------------------------------------------------------

export async function baseFetchJSON(url, init = {}, headers = null, timeout = 30000, catchError = null) {
  let json
  let response

  const controller = new AbortController()
  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeout)

  try {
    init = {
      ...init,
      headers: headers || {
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    }

    response = await fetch(url, init)

    await baseHandleFetchError(response)

    //we only get here if there is no error
    try {
      json = await response.json()
      return json
    } catch (e) {
      if (e.message.includes('Unexpected end of JSON input')) return ''
      else throw e
    }
  } catch (error) {
    if (catchError) catchError(error, response, url, init)
  } finally {
    clearTimeout(timeoutId)
  }
}
