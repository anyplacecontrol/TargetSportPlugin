import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    pageHeader: 'ACME Members Get a xx% Discount!',
    areYouMember: 'Are you an ACME Member?',
    getDiscount: 'Sign in to get your xx% discount!'
  },
  es: {
    pageHeader: '¡Los miembros de ACME obtienen un descuento del xx%!',
    areYouMember: '¿Eres miembro de ACME?',
    getDiscount: '¡Inicia sesión para obtener tu descuento del xx%!'
  },
  zh: {
    pageHeader: 'ACME会员享受xx%折扣',
    areYouMember: '您是ACME会员吗？',
    getDiscount: '登录以获取xx%的折扣！'
  },
  tl: {
    pageHeader: 'Kumukuha ng xx% Diskwento ang mga Miyembro ng ACME!',
    areYouMember: 'Ikaw ba ay Miyembro ng ACME?',
    getDiscount: 'Mag-sign in upang makuha ang iyong xx% diskwento!'
  },
  vi: {
    pageHeader: 'Thành viên ACME nhận được giảm giá xx%!',
    areYouMember: 'Bạn có phải là thành viên ACME không?',
    getDiscount: 'Đăng nhập để nhận ưu đãi xx% của bạn!'
  },
  ar: {
    pageHeader: 'يحصل أعضاء ACME على خصم xx%',
    areYouMember: 'هل أنت عضو في ACME؟',
    getDiscount: 'قم بتسجيل الدخول للحصول على خصم xx% الخاص بك!'
  },
  fr_ca: {
    pageHeader: 'Les membres de ACME obtiennent un rabais de xx%',
    areYouMember: 'Êtes-vous membre de ACME?',
    getDiscount: 'Connectez-vous pour obtenir votre rabais de xx%!'
  },
  ko: {
    pageHeader: 'ACME 회원은 xx% 할인 혜택을 받습니다!',
    areYouMember: 'ACME 회원이십니까?',
    getDiscount: 'xx% 할인 혜택을 받으려면 로그인하세요!'
  },
  pt: {
    pageHeader: 'Os membros da ACME obtêm um desconto de xx%',
    areYouMember: 'Você é um membro da ACME?',
    getDiscount: 'Faça login para obter seu desconto de xx%!'
  },
  ja: {
    pageHeader: 'ACMEメンバーはxx％割引を受けます！',
    areYouMember: 'ACMEのメンバーですか？',
    getDiscount: 'xx％の割引を受けるにはログインしてください！'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
