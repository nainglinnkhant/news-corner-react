export const sendRequest = async (url) => {
     const response = await fetch(url)
     const responseData = await response.json()

     if(!response.ok) {
          throw new Error(responseData.message)
     }

     return responseData
}

export const getViewWidth = () => {
     return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
}

export const trimDescription = (titleLength, description, width) => {
     if(description) {
          if(width <= 576) return description

          if(width > 576 && titleLength <= 73) {
               return `${description.slice(0, 115).trim()}...`
          }

          if(width > 576 && titleLength > 130) {
               return `${description.slice(0, 35).trim()}...`
          }

          if(width > 576 && titleLength > 105) {
               return `${description.slice(0, 65).trim()}...`
          }
               
          if(width > 576 && titleLength > 94) {
               return `${description.slice(0, 75).trim()}...`
          }

          if(width > 576 && titleLength > 73) {
               return `${description.slice(0, 90).trim()}...`
          }
     }
     
     return ''
}

export const COUNTRY_CODES = {
     ae: ['united arab emirates', 'uae'],
     ar: ['argentina'],
     at: ['austria'],
     au: ['australia'],
     be: ['belgium'],
     bg: ['bulgaria'],
     br: ['brazil'],
     ca: ['canada'],
     ch: ['switzerland'],
     cn: ['china'],
     co: ['colombia'],
     cu: ['cuba'],
     cz: ['czech', 'czechia'],
     de: ['germany'],
     eg: ['egypt'],
     fr: ['france'],
     gb: ['united kingdom', 'uk'],
     gr: ['greece'],
     hk: ['hong kong'],
     hu: ['hungary'],
     id: ['indonesia'],
     ie: ['ireland'],
     il: ['israel'],
     in: ['india'],
     it: ['italy'],
     jp: ['japan'],
     kr: ['south korea', 'korea'],
     lt: ['lithuania'],
     lv: ['latvia'],
     ma: ['morocco'],
     mx: ['mexico'],
     my: ['malaysia'],
     ng: ['nigeria'],
     nl: ['netherlands'],
     no: ['norway'],
     nz: ['new zealand'],
     ph: ['philippines'],
     pl: ['poland'],
     pt: ['portugal'],
     ro: ['romania'],
     rs: ['serbia'],
     ru: ['russia'],
     sa: ['saudi arabia'],
     se: ['sweden'],
     sg: ['singapore'],
     si: ['slovenia'],
     sk: ['slovakia'],
     th: ['thailand'],
     tr: ['turkey'],
     tw: ['taiwan'],
     ua: ['ukraine'],
     us: ['united states', 'us'],
     ve: ['venezuela'],
     za: ['south africa']
}

export const convertCountryCode = (countryName) => {
     for(const countryCode in COUNTRY_CODES) {
          if(COUNTRY_CODES[countryCode].some(name => name === countryName.toLowerCase())){
               return countryCode
          }
     }
}

export const capitilize = (str) => {
     return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

export const setNewsState= (newsState, payload) => {
     const { propName, currentPage, totalResults, articles } = payload

     if(currentPage === 1) {
          newsState[propName] = {}
          newsState[propName].articles = articles
     } else {
          newsState[propName].articles.push(...articles)
     }
     newsState[propName].currentPage = currentPage
     newsState[propName].totalResults = totalResults
}