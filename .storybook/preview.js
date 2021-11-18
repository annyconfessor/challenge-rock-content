import React from 'react'
import { addParameters } from '@storybook/react'
import { baseTheme } from './theme'

import { ThemeProvider } from '../src/theme'

addParameters({
  options: {
    theme: baseTheme
  }
})

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
]
