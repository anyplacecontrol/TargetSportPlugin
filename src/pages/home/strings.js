import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    pageHeader: 'Target Sports USA Members Get a xx% Discount!',
    areYouMember: 'Are you an Target Sports USA Member?',
    getDiscount: 'Sign in to get your xx% discount!'
  },
  es: {
    pageHeader: '¡Los miembros de Target Sports USA obtienen un descuento del xx%!',
    areYouMember: '¿Eres miembro de Target Sports USA?',
    getDiscount: '¡Inicia sesión para obtener tu descuento del xx%!'
  },
  zh: {
    pageHeader: 'Target Sports USA会员享受xx%折扣',
    areYouMember: '您是Target Sports USA会员吗？',
    getDiscount: '登录以获取xx%的折扣！'
  },
  tl: {
    pageHeader: 'Kumukuha ng xx% Diskwento ang mga Miyembro ng Target Sports USA!',
    areYouMember: 'Ikaw ba ay Miyembro ng Target Sports USA?',
    getDiscount: 'Mag-sign in upang makuha ang iyong xx% diskwento!'
  },
  vi: {
    pageHeader: 'Thành viên Target Sports USA nhận được giảm giá xx%!',
    areYouMember: 'Bạn có phải là thành viên Target Sports USA không?',
    getDiscount: 'Đăng nhập để nhận ưu đãi xx% của bạn!'
  },
  ar: {
    pageHeader: 'يحصل أعضاء Target Sports USA على خصم xx%',
    areYouMember: 'هل أنت عضو في Target Sports USA؟',
    getDiscount: 'قم بتسجيل الدخول للحصول على خصم xx% الخاص بك!'
  },
  fr_ca: {
    pageHeader: 'Les membres de Target Sports USA obtiennent un rabais de xx%',
    areYouMember: 'Êtes-vous membre de Target Sports USA?',
    getDiscount: 'Connectez-vous pour obtenir votre rabais de xx%!'
  },
  ko: {
    pageHeader: 'Target Sports USA 회원은 xx% 할인 혜택을 받습니다!',
    areYouMember: 'Target Sports USA 회원이십니까?',
    getDiscount: 'xx% 할인 혜택을 받으려면 로그인하세요!'
  },
  pt: {
    pageHeader: 'Os membros da Target Sports USA obtêm um desconto de xx%',
    areYouMember: 'Você é um membro da Target Sports USA?',
    getDiscount: 'Faça login para obter seu desconto de xx%!'
  },
  ja: {
    pageHeader: 'Target Sports USAメンバーはxx％割引を受けます！',
    areYouMember: 'Target Sports USAのメンバーですか？',
    getDiscount: 'xx％の割引を受けるにはログインしてください！'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
