import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    noMembership: "Don't have a membership?",
    scanToSignUp: 'Scan here to sign up on your phone.',
    seeYouSoon: 'See you back here in 2 minutes!'
  },
  es: {
    noMembership: '¿No tienes una membresía?',
    scanToSignUp: 'Escanea aquí para registrarte en tu teléfono.',
    seeYouSoon: '¡Nos vemos aquí en 2 minutos!'
  },
  zh: {
    noMembership: '没有会员资格？',
    scanToSignUp: '在手机上扫描此处注册。',
    seeYouSoon: '2分钟后见！'
  },
  tl: {
    noMembership: 'Wala ka bang membership?',
    scanToSignUp: 'I-scan dito upang mag-sign up sa iyong telepono.',
    seeYouSoon: 'Kita tayo dito sa loob ng 2 minuto!'
  },
  vi: {
    noMembership: 'Không có thẻ thành viên?',
    scanToSignUp: 'Quét ở đây để đăng ký trên điện thoại của bạn.',
    seeYouSoon: 'Hẹn gặp lại bạn sau 2 phút!'
  },
  ar: {
    noMembership: 'ليس لديك عضوية؟',
    scanToSignUp: 'امسح هنا للتسجيل على هاتفك.',
    seeYouSoon: 'أراك هنا بعد دقيقتين!'
  },
  fr_ca: {
    noMembership: "Vous n'avez pas d'adhésion?",
    scanToSignUp: 'Scannez ici pour vous inscrire sur votre téléphone.',
    seeYouSoon: 'À bientôt ici dans 2 minutes!'
  },
  ko: {
    noMembership: '회원이 아니신가요?',
    scanToSignUp: '휴대폰으로 등록하려면 여기를 스캔하세요.',
    seeYouSoon: '2분 후에 여기서 뵙겠습니다!'
  },
  pt: {
    noMembership: 'Não tem uma associação?',
    scanToSignUp: 'Escaneie aqui para se inscrever no seu telefone.',
    seeYouSoon: 'Te vejo de volta aqui em 2 minutos!'
  },
  ja: {
    noMembership: 'メンバーシップをお持ちではありませんか？',
    scanToSignUp: 'ここをスキャンして携帯電話でサインアップしてください。',
    seeYouSoon: '2分後にここでお会いしましょう！'
  }
})

// Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
