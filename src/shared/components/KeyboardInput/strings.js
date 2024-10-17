import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    PleaseTypeIn: 'Please type in...'
  },
  es: {
    PleaseTypeIn: 'Por favor escriba...'
  },
  zh: {
    PleaseTypeIn: '请输入...'
  },
  tl: {
    PleaseTypeIn: 'Mangyaring mag-type...'
  },
  vi: {
    PleaseTypeIn: 'Vui lòng nhập...'
  },
  ar: {
    PleaseTypeIn: 'الرجاء كتابة ...'
  },
  fr_ca: {
    PleaseTypeIn: 'Veuillez saisir...'
  },
  ko: {
    PleaseTypeIn: '입력하십시오...'
  },
  pt: {
    PleaseTypeIn: 'Digite...'
  },
  ja: {
    PleaseTypeIn: '入力してください...'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
