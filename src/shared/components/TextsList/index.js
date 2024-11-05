import React, {useMemo} from 'react'

export const TextsList = ({texts}) => useMemo(() => {
  if (!texts) return null
  if (!Array.isArray(texts)) return <div>{texts}</div>

  return (
    <div className={`col-sta-cen w-full gap-v-1`}>
      {texts.map((text, i) => text && <span key={i}>{text}</span>)}
    </div>
  )
}, [texts])
