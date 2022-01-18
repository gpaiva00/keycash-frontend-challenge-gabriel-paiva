import React, { FC, ReactElement } from 'react'

import { Container, Text } from './styles'

interface ButtonProps {
  text: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'outlined'
  size?: 's' | 'm' | 'l'
  icon?: ReactElement
}

const Button: FC<ButtonProps> = ({ text, onPress, variant, size, icon }) => {
  return (
    <Container onPress={onPress} size={size} variant={variant}>
      {icon && icon}
      <Text variant={variant}>{text}</Text>
    </Container>
  )
}

export default Button
