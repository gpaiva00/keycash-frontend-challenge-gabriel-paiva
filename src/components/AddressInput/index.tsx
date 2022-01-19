import React, { FC, InputHTMLAttributes, useCallback, useState } from 'react'

import Input from '../Input'

import { Icon } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setAddressToFilter: (address: string) => void
}

const AddressInput: FC<InputProps> = ({ setAddressToFilter }) => {
  const [addressText, setAddressText] = useState('')
  const [inputIsActive, setInputIsActive] = useState(false)

  const handleOnBlur = useCallback(() => {
    setInputIsActive(false)
    setAddressToFilter(addressText)
  }, [addressText])

  const handleOnFocus = useCallback(() => {
    setInputIsActive(true)
  }, [])

  return (
    <Input
      value={addressText}
      onChangeText={setAddressText}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onSubmitEditing={handleOnBlur}
      placeholder="Digite aqui o endereço"
      inputIsActive={inputIsActive}
      icon={
        <Icon
          inputIsActive={inputIsActive || !!addressText}
          name="map-marker-alt"
          size={15}
        />
      }
      returnKeyType="done"
    />
  )
}

export default AddressInput
