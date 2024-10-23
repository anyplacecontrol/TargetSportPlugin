export const APP_VERSION = process.env.REACT_APP_VERSION || '0.0'
export const isFakeAllData = window.location.search.includes('isFakeAllData=true')
const params = new URLSearchParams(window.location.search)
export const language = params.get('lng') || 'en'

export const REST_URL = `https://integrations.betaadmin.com/target-sports`
