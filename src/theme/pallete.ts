const pallete = {
    white: '#fff',
    blue: {
      default: '#4166AF',
      transparency: '#bacee0',
      light: '#64B5F6',
      dark: '#395387'
    },
    red: {
      default: '#DF3A45',
      transparency: '#F5D5DA',
      light: '#F39EA4',
      dark: '#B8000C'
    },
    orange: {
      default: '#F8AC59',
      transparency: '#FAEBDE',
      light: '#FAC58B',
      dark: '#C68A47'
    },
    gray: {
      default: '#7A8B9A',
      transparency: '#F5F5F5',
      light: '#E1E2E7',
      dark: '#575B64',
    }
  }
  
  export default {
    ...pallete,
    primary: pallete.blue.default,
    secondary: pallete.gray.default,
    warning: pallete.orange.default,
    error: pallete.red.default
  }
  