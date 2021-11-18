import React, { useMemo } from 'react'

import Row, { RowProps } from '../Row/Row'
import theme from '../../theme/Theme'
import { getDeepKey } from '../../helpers/data'

export interface IconProps extends RowProps {
  name: typeof iconNames[number]
  color?: string
  size?: string | number
  onClick?: () => void
}

export const iconNames = [
  'ArrowBackDown',
  'ArrowNextUp',
  'User'
]
import ArrowBackDown from './ArrowBackDown'
import ArrowNextUp from './ArrowNextUp'
import User from './User'

const IconComponent = ({ name, color, size, ...props }: IconProps) => {
  const Icon = useMemo(() => {
    switch (name) {
      default:
      case 'ArrowBackDown':
        return ArrowBackDown
      case 'ArrowNextUp':
        return ArrowNextUp
      case 'User':
        return User
    }
  }, [name])

  const iconColor = getDeepKey(theme.colors, color)

  return (
    <Row height={size} display='block' cursor={props.onClick && 'pointer'} {...props}>
      <Icon color={iconColor} size={size} />
    </Row>
  )
}

IconComponent.defaultProps = {
  size: 48,
  color: 'gray.600'
}

export default IconComponent
