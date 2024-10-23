import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    discountAvailable: 'You have successfully logged in and have a discount xx%',
    discountNotAvailable: 'You have successfully logged in but have no discount',
    error: 'Error',
    errorOccurred: 'An error occurred',
    timeToShop: 'Time to Start Shopping!',
    discountMessage: 'Your standard membership gets you a xx% discount!'
  },
  es: {
    discountAvailable: 'Has iniciado sesión correctamente y tienes un descuento xx%',
    discountNotAvailable: 'Has iniciado sesión correctamente pero no tienes descuento',
    error: 'Error',
    errorOccurred: 'Ocurrió un error',
    timeToShop: '¡Es hora de empezar a comprar!',
    discountMessage: '¡Tu membresía estándar te da un descuento de xx%!'
  },
  zh: {
    discountAvailable: '您已成功登录并享有折扣 xx%',
    discountNotAvailable: '您已成功登录但没有折扣',
    error: '错误',
    errorOccurred: '发生了错误',
    timeToShop: '是时候开始购物了！',
    discountMessage: '您的标准会员资格可享受 xx% 的折扣！'
  },
  tl: {
    discountAvailable: 'Matagumpay kang naka-login at may diskwento xx%',
    discountNotAvailable: 'Matagumpay kang naka-login ngunit walang diskwento',
    error: 'Error',
    errorOccurred: 'Nagkaroon ng error',
    timeToShop: 'Panahon na para mamili!',
    discountMessage: 'Ang iyong karaniwang membership ay nagbibigay sa iyo ng xx% diskwento!'
  },
  vi: {
    discountAvailable: 'Bạn đã đăng nhập thành công và có giảm giá xx%',
    discountNotAvailable: 'Bạn đã đăng nhập thành công nhưng không có giảm giá',
    error: 'Lỗi',
    errorOccurred: 'Đã xảy ra lỗi',
    timeToShop: 'Đã đến lúc mua sắm!',
    discountMessage: 'Thẻ thành viên tiêu chuẩn của bạn được giảm giá xx%!'
  },
  ar: {
    discountAvailable: 'لقد قمت بتسجيل الدخول بنجاح ولديك خصم xx%',
    discountNotAvailable: 'لقد قمت بتسجيل الدخول بنجاح ولكن ليس لديك خصم',
    error: 'خطأ',
    errorOccurred: 'حدث خطأ',
    timeToShop: 'حان وقت التسوق!',
    discountMessage: 'عضويتك القياسية تمنحك خصمًا xx%!'
  },
  fr_ca: {
    discountAvailable: 'Vous vous êtes connecté avec succès et avez une réduction de xx%',
    discountNotAvailable: "Vous vous êtes connecté avec succès mais n'avez pas de réduction",
    error: 'Erreur',
    errorOccurred: "Une erreur s'est produite",
    timeToShop: 'Il est temps de commencer à magasiner!',
    discountMessage: 'Votre adhésion standard vous donne une réduction de xx%!'
  },
  ko: {
    discountAvailable: '성공적으로 로그인하셨고 xx% 할인이 있습니다',
    discountNotAvailable: '성공적으로 로그인했지만 할인이 없습니다',
    error: '오류',
    errorOccurred: '오류가 발생했습니다',
    timeToShop: '쇼핑을 시작할 시간입니다!',
    discountMessage: '표준 멤버십으로 xx% 할인을 받으세요!'
  },
  pt: {
    discountAvailable: 'Você fez login com sucesso e tem um desconto de xx%',
    discountNotAvailable: 'Você fez login com sucesso, mas não tem desconto',
    error: 'Erro',
    errorOccurred: 'Ocorreu um erro',
    timeToShop: 'Hora de começar a comprar!',
    discountMessage: 'Sua associação padrão lhe dá um desconto de xx%!'
  },
  ja: {
    discountAvailable: 'ログインに成功し、xx% の割引があります',
    discountNotAvailable: 'ログインに成功しましたが、割引はありません',
    error: 'エラー',
    errorOccurred: 'エラーが発生しました',
    timeToShop: '買い物を始める時間です！',
    discountMessage: '標準メンバーシップで xx% の割引を受けられます！'
  }
})

// Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
