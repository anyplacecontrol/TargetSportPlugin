import {useState, useEffect, useCallback} from 'react'

window.cachedImages = [] //array of objects: {datetime, url, base64}

export function useCachedImage(srcUrl, cacheImages) {
  const [isMounted, setIsMounted] = useState(true)
  const [src, setSrc] = useState(cacheImages ? null : srcUrl)

  const cacheImg = useCallback(() => {
    fetch(srcUrl).then((response) => {
      response.blob().then((blob) => {
        let promise = new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })

        promise.then((result) => {
          window.cachedImages.push({
            srcUrl,
            base64: result
          })

          if (isMounted) setSrc(result)
        })
      })
    })
  }, [srcUrl, isMounted])

  useEffect(() => {
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!cacheImages) {
      setSrc(srcUrl)
      return
    }
    //search image in cache
    for (let i = 0; i < window.cachedImages.length; i++) {
      if (window.cachedImages[i].url === srcUrl) {
        setSrc(window.cachedImages[i].base64)
        return
      }
    }
    //if not found
    cacheImg()
  }, [srcUrl, cacheImg, cacheImages])

  return src
}
