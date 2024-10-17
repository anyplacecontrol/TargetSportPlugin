import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    touchToStart: 'Touch to Start'
  },
  es: {
    touchToStart: 'Toque para iniciar'
  },
  zh: {
    touchToStart: '点击开始'
  },
  tl: {
    touchToStart: 'Pindutin para Simulan'
  },
  vi: {
    touchToStart: 'Chạm để bắt đầu'
  },
  ar: {
    touchToStart: 'المس للبدء'
  },
  fr_ca: {
    touchToStart: 'Appuyez pour commencer'
  },
  ko: {
    touchToStart: '터치 투 스타트'
  },
  pt: {
    touchToStart: 'Toque para iniciar'
  },
  ja: {
    touchToStart: 'タッチして開始'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
