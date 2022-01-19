import React, { FC, InputHTMLAttributes, useCallback, useState } from 'react'

import Input from '../Input'

import { BRLText } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setPriceToFilter: (value: number) => void
}

const PriceInput: FC<InputProps> = ({ setPriceToFilter, ...props }) => {
  const [priceText, setPriceText] = useState(0)
  const [inputIsActive, setInputIsActive] = useState(false)

  const handleOnBlur = useCallback(() => {
    setInputIsActive(false)
    setPriceToFilter(priceText)
  }, [priceText])

  const handleOnFocus = useCallback(() => {
    setInputIsActive(true)
  }, [])

  return (
    <Input
      {...props}
      inputIsActive={inputIsActive}
      value={priceText}
      onChangeText={setPriceText}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onSubmitEditing={handleOnBlur}
      icon={<BRLText inputIsActive={inputIsActive || !!priceText}>R$</BRLText>}
      keyboardType="numeric"
      inputSize="s"
      returnKeyType="done"
    />
  )
}

export default PriceInput
