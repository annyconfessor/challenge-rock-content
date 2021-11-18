import 'styled-components'

type ThemeColor = {
  default: string
  transparency: string
  light: string
  dark: string
}

type ThemeColorFull = ThemeColor & {
  300: string
  600: string
  700: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      green: ThemeColor
      blue: ThemeColor
      red: ThemeColor
      orange: ThemeColor
      gray: ThemeColorFull
      primary: string
      secondary: string
      error: string
      warning: string
    }
    fontSizes: number[]
    space: number[]
    breakpoints: number[]
  }
}
