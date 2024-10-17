import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    back: 'Back'
  },
  es: {
    back: 'atrás'
  },
  zh: {
    back: '返回'
  },
  tl: {
    back: 'Bumalik'
  },
  vi: {
    back: 'Quay lại'
  },
  ar: {
    back: 'خلف'
  },
  fr_ca: {
    back: 'Retour'
  },
  ko: {
    back: '뒤로'
  },
  pt: {
    back: 'Voltar'
  },
  ja: {
    back: '戻る'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
