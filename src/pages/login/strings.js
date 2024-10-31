import LocalizedStrings from 'react-localization'
import {STRINGS_AGGREGATOR} from '../../shared/utils/stringsAggregator'

export const strings = new LocalizedStrings({
  en: {
    loginPageHeader: 'Enter Your Target Sports USA Membership Credentials to Get Started',
    emailAddress: 'Email Address',
    enterEmail: 'Enter your email address',
    password: 'Password',
    enterPassword: 'Enter your password',
    submitButton: 'Submit'
  },
  es: {
    loginPageHeader: 'Ingrese sus credenciales de membresía de Target Sports USA para comenzar',
    emailAddress: 'Dirección de correo electrónico',
    enterEmail: 'Ingrese su dirección de correo electrónico',
    password: 'Contraseña',
    enterPassword: 'Ingrese su contraseña',
    submitButton: 'Enviar'
  },
  zh: {
    loginPageHeader: '输入您的Target Sports USA会员凭据以开始',
    emailAddress: '电子邮件地址',
    enterEmail: '输入您的电子邮件地址',
    password: '密码',
    enterPassword: '输入您的密码',
    submitButton: '提交'
  },
  tl: {
    loginPageHeader: 'Maglagay ng iyong Target Sports USA Membership Credentials upang Magsimula',
    emailAddress: 'Email Address',
    enterEmail: 'Maglagay ng iyong email address',
    password: 'Password',
    enterPassword: 'Maglagay ng iyong password',
    submitButton: 'Ipasa'
  },
  vi: {
    loginPageHeader: 'Nhập thông tin đăng nhập thành viên Target Sports USA của bạn để bắt đầu',
    emailAddress: 'Địa chỉ email',
    enterEmail: 'Nhập địa chỉ email của bạn',
    password: 'Mật khẩu',
    enterPassword: 'Nhập mật khẩu của bạn',
    submitButton: 'Gửi'
  },
  ar: {
    loginPageHeader: 'أدخل بيانات اعتماد عضوية Target Sports USA الخاصة بك للبدء',
    emailAddress: 'عنوان البريد الإلكتروني',
    enterEmail: 'أدخل عنوان بريدك الإلكتروني',
    password: 'كلمة المرور',
    enterPassword: 'أدخل كلمة المرور الخاصة بك',
    submitButton: 'إرسال'
  },
  fr_ca: {
    loginPageHeader: "Entrez vos identifiants d'adhésion Target Sports USA pour commencer",
    emailAddress: 'Adresse e-mail',
    enterEmail: 'Entrez votre adresse e-mail',
    password: 'Mot de passe',
    enterPassword: 'Entrez votre mot de passe',
    submitButton: 'Soumettre'
  },
  ko: {
    loginPageHeader: '시작하려면 Target Sports USA 회원 자격 증명을 입력하십시오',
    emailAddress: '이메일 주소',
    enterEmail: '이메일 주소를 입력하십시오',
    password: '암호',
    enterPassword: '비밀번호를 입력하십시오',
    submitButton: '제출'
  },
  pt: {
    loginPageHeader: 'Insira suas credenciais de associação Target Sports USA para começar',
    emailAddress: 'Endereço de e-mail',
    enterEmail: 'Insira seu endereço de e-mail',
    password: 'Senha',
    enterPassword: 'Insira sua senha',
    submitButton: 'Enviar'
  },
  ja: {
    loginPageHeader: '開始するにはTarget Sports USA会員資格情報を入力してください',
    emailAddress: 'メールアドレス',
    enterEmail: 'メールアドレスを入力してください',
    password: 'パスワード',
    enterPassword: 'パスワードを入力してください',
    submitButton: '提出する'
  }
})

//Add these strings to global aggregator
STRINGS_AGGREGATOR.push(strings)
