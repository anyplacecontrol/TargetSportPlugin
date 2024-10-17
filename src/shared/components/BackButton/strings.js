import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    Back: 'Back'
  },
  es: {
    Back: 'atrás'
  },
  zh: {
    Back: '返回'
  },
  tl: {
    Back: 'Bumalik'
  },
  vi: {
    Back: 'Quay lại'
  },
  ar: {
    Back: 'خلف'
  },
  fr_ca: {
    Back: 'Retour'
  },
  ko: {
    Back: '뒤로'
  },
  pt: {
    Back: 'Voltar'
  },
  ja: {
    Back: '戻る'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
