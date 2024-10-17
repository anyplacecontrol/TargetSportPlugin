import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../shared/utils/stringsAggregator'

//strings, shared for many modules
export const strings = new LocalizedStrings({
  en: {
    CancelButtonText: 'Cancel'
  },
  es: {
    CancelButtonText: 'Cancelar'
  },
  zh: {
    CancelButtonText: '取消'
  },
  tl: {
    CancelButtonText: 'Kanselahin'
  },
  vi: {
    CancelButtonText: 'Hủy bỏ'
  },
  ar: {
    CancelButtonText: 'يلغي'
  },
  fr_ca: {
    CancelButtonText: 'Annuler'
  },
  ko: {
    CancelButtonText: '취소하다'
  },
  pt: {
    CancelButtonText: 'Cancelar'
  },
  ja: {
    CancelButtonText: 'キャンセル'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
