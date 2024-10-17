import {DEFAULT_COLORS} from '../const/defaultColors'

function getColorOrDefault(colorName) {
  if (!window.branding?.colors || !window.branding.colors[colorName]) return DEFAULT_COLORS[colorName]
  else return window.branding.colors[colorName]
}

export function getBrandingStyle(styleName) {
  //Styles for buttons (bg + fg)
  switch (styleName) {
    case 'primaryButton':
      return {
        backgroundColor: getColorOrDefault('primaryBackground'),
        background: getColorOrDefault('primaryBackground'),
        color: getColorOrDefault('whiteForeground')
      }
    case 'additionalButton':
      return {
        backgroundColor: getColorOrDefault('additionalBackground'),
        background: getColorOrDefault('additionalBackground'),
        color: getColorOrDefault('whiteForeground')
      }
    case 'grayButton':
      return {
        backgroundColor: getColorOrDefault('grayBackground'),
        background: getColorOrDefault('grayBackground'),
        color: getColorOrDefault('whiteForeground')
      }
    case 'accentButton':
      return {
        backgroundColor: getColorOrDefault('accentBackground'),
        color: getColorOrDefault('whiteForeground')
      }
    case 'cancelButton':
      return {
        backgroundColor: getColorOrDefault('lightBackground'),
        background: getColorOrDefault('lightBackground'),
        color: getColorOrDefault('cancelText')
      }
    case 'cardButton':
      return {
        backgroundColor: getColorOrDefault('lightestBackground'),
        background: getColorOrDefault('lightestBackground'),
        color: getColorOrDefault('blackText')
      }
    case 'primaryInverseButton':
      return {
        backgroundColor: getColorOrDefault('lightestBackground'),
        background: getColorOrDefault('lightestBackground'),
        color: getColorOrDefault('primaryBackground')
      }
    default:
      break
  }

  switch (styleName) {
    case 'headerBackground':
    case 'darkestBackground':
    case 'darkBackground':
    case 'lightestBackground':
    case 'lightBackground':
    case 'grayBackground':
    case 'primaryBackground':
    case 'additionalBackground':
      return {
        backgroundColor: getColorOrDefault(styleName),
        background: getColorOrDefault(styleName)
      }
    case 'accentBackground':
      return {
        backgroundColor: getColorOrDefault(styleName)
      }
    case 'priceBackground': //artificial
      return {
        backgroundColor: getColorOrDefault('priceText'),
        background: getColorOrDefault('priceText')
      }

    case 'whiteForeground':
    case 'accentForeground':
    case 'infoIconForeground':
    case 'blackText':
    case 'grayText':
    case 'priceText':
    case 'cancelText':
    case 'secondaryText':
      return {color: getColorOrDefault(styleName)}
    case 'primaryText': //artificial
      return {color: getColorOrDefault('primaryBackground')}
    case 'darkForeground': //artificial
      return {color: getColorOrDefault('darkBackground')}
    case 'categoryBorder':
      return {
        borderColor: getColorOrDefault(styleName)
      }
    case 'grayBorder': //artificial
      return {borderColor: getColorOrDefault('grayText')}
    case 'accentBorder': //artificial
      return {borderColor: getColorOrDefault('accentForeground')}
    case 'primaryBorder':
      return {borderColor: getColorOrDefault('primaryBackground')}
    default:
      return {}
  }
}
