
const DOMAIN = '/'
// const DOMAIN = 'https://cargo.helium.com/api/'

export const get = (url) => fetch(DOMAIN + url)