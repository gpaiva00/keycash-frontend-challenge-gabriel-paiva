import React, { FC, InputHTMLAttributes, ReactElement } from 'react'

import { Container, Input as InputComp } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement
  inputSize?: 's' | 'm' | 'l'
  inputIsActive?: boolean
}

const Input: FC<InputProps> = ({
  icon,
  inputSize,
  inputIsActive,
  ...props
}) => {
  return (
    <Container size={inputSize} inputIsActive={inputIsActive}>
      {icon && icon}
      <InputComp {...props} />
    </Container>
  )
}

export default Input
