import React, { FC, InputHTMLAttributes, ReactElement } from 'react'

import { Container, Input as InputComp } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement
}

const Input: FC<InputProps> = ({ icon, ...props }) => {
  return (
    <Container>
      {icon && icon}
      <InputComp {...props} />
    </Container>
  )
}

export default Input
