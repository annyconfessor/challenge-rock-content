import React, { FC, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'
import {
  variant,
  layout,
  space,
  color,
  position,
  flexbox,
  SpaceProps,
  PaddingProps,
  LayoutProps,
  ColorProps,
  PositionProps,
  FlexboxProps,
  compose
} from 'styled-system'

import { Icon, iconNames } from '../Icon'
export interface ButtonProps
  extends SpaceProps,
    PaddingProps,
    PositionProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text'
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'destruction'
  leftIcon?: typeof iconNames[number]
  rightIcon?: typeof iconNames[number]
  size?: 'large' | 'medium' | 'small'
}

const StyledButton = styled.button<Omit<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    ${variant({
      variants: {
        contained: {
          color: 'white',
          bg: theme.colors[color].default,
          '&:hover': {
            bg: theme.colors[color].dark
          },
          '&:disabled': {
            opacity: 0.4,
            bg: `${theme.colors.gray.light}`,
            color: `${theme.colors.gray.default}`,
            cursor: 'not-allowed'
          }
        },
        outlined: {
          bg: `${theme.colors.white}`,
          borderColor: theme.colors[color].default,
          color: theme.colors[color].default,
          '&:hover': {
            bg: theme.colors[color].transparency
          },
          '&:disabled': {
            opacity: 0.4,
            bg: `${theme.colors.white}`,
            color: `${theme.colors.gray.default}`,
            borderColor: theme.colors.gray.default,
            cursor: 'not-allowed'
          }
        },
        text: {
          bg: 'transparent',
          borderColor: 'transparent',
          color: theme.colors[color].default,
          '&:hover': {
            bg: theme.colors[color].transparency,
            color: theme.colors[color].default
          },
          '&:disabled': {
            bg: 'transparent',
            opacity: 0.4,
            color: `${theme.colors.gray.default}`,
            cursor: 'not-allowed'
          }
        }
      }
    })}
    ${variant({
      prop: 'size',
      variants: {
        large: {
          fontSize: '16px',
          padding: '0 20px',
          height: '48px'
        },
        medium: {
          fontSize: '14px',
          padding: '0 16px',
          height: '40px'
        },
        small: {
          fontSize: '14px',
          padding: '0 16px',
          height: '32px'
        }
      }
    })}
  `}
  ${compose(space, layout, position, color, flexbox)}
`

const Button: FC<ButtonProps> = (props) => {
  const [ count, setCount ] = useState(0)
  const { variant = 'contained', color = 'primary', size = 'large', leftIcon, rightIcon, disabled, ...rest } = props

  const buttonColors = {
    primary: 'blue',
    secondary: 'gray',
    destruction: 'red'
  }

  const iconColor = disabled ? 'gray.default' : variant === 'contained' ? 'white' : color

  const iconSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 18
      case 'medium':
        return 22
      case 'large':
        return 22
    }
  }, [size])

  return (
    <StyledButton 
      variant={variant} 
      color={buttonColors[color]} 
      size={size} 
      disabled={disabled} 
      onClick={()=>setCount(count+1)}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} pr={props.children ? '10px' : 0} color={iconColor}></Icon>}
      {props.children ? disabled ? `${props.children}` : `+${count} ${props.children}` : null}
      {rightIcon && <Icon name={rightIcon} size={iconSize} pl={props.children ? '10px' : 0} color={iconColor}></Icon>}
    </StyledButton>
  )
}

export default Button
