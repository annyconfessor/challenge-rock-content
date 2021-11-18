import { system, Config } from 'styled-system'

import pallete from './pallete'

const colors = { ...pallete }

const fontSizes = [12, 14, 16, 18, 24, 32, 48]

const space = [0, 2, 4, 8, 16, 24, 32, 64]

const breakpoints = [768]

const Theme = { colors, fontSizes, space, breakpoints }

system({ prop: 'cursor', cssProperty: 'cursor' } as Config)

export default Theme
