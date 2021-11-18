import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider as StyledProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import Theme from './Theme'

export interface ChallangeProps {
  children?: any
}


const ResetStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: Roboto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 100%;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.gray.dark};
    }
  }
`

const ThemeProvider = (props: ChallangeProps) => {
  const { children } = props
  return (
    <Fragment>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <StyledProvider theme={Theme}>
        <ResetStyle />
        {children}
      </StyledProvider>
    </Fragment>
  )
}

export { ThemeProvider }
