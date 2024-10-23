import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    continueWithoutDiscount: 'Continue without Member Discount'
  },
  es: {
    continueWithoutDiscount: 'Continuar sin descuento para miembros'
  },
  zh: {
    continueWithoutDiscount: '继续不享受会员折扣'
  },
  tl: {
    continueWithoutDiscount: 'Magpatuloy nang walang Diskwento ng Miyembro'
  },
  vi: {
    continueWithoutDiscount: 'Tiếp tục mà không có Giảm giá Thành viên'
  },
  ar: {
    continueWithoutDiscount: 'تابع بدون خصم الأعضاء'
  },
  fr_ca: {
    continueWithoutDiscount: 'Continuer sans rabais pour les membres'
  },
  ko: {
    continueWithoutDiscount: '회원 할인 없이 계속하기'
  },
  pt: {
    continueWithoutDiscount: 'Continuar sem desconto para membros'
  },
  ja: {
    continueWithoutDiscount: '会員割引なしで続行'
  }
})

// Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
