import React, { FC, InputHTMLAttributes, ReactElement, useState } from 'react'

import Input from '../Input'

import { Icon } from './styles'
import colors from '../../styles/colors'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // onBlur: (value: string) => void
}

const AddressInput: FC<InputProps> = (...props) => {
  const [addressText, setAddressText] = useState('')

  // const handleOnBlur = () => onBlur(addressText)

  return (
    <Input
      {...props}
      value={addressText}
      onChange={props => setAddressText(props.target.value)}
      // onBlur={handleOnBlur}
      placeholder="Digite aqui o endereço"
      icon={<Icon name="map-marker-alt" size={15} color={colors.primary} />}
    />
  )
}

export default AddressInput
