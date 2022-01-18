import React, { FC, ReactElement } from 'react'

import { Container, Text } from './styles'

interface ButtonProps {
  text: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'outlined'
  size?: 's' | 'm' | 'l' | 'xs'
  icon?: ReactElement
}

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  variant = 'primary',
  size = 's',
  icon,
}) => {
  return (
    <Container hasIcon={!!icon} onPress={onPress} size={size} variant={variant}>
      {icon && icon}
      <Text variant={variant} hasIcon={icon}>
        {text}
      </Text>
    </Container>
  )
}

export default Button
