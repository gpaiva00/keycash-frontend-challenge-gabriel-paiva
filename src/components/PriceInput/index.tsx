import React, { FC, InputHTMLAttributes, useCallback, useState } from 'react'

import { Container } from '../Input/styles'

import { BRLText, Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setPriceToFilter: (value: number) => void
  initialValue?: number
}

const PriceInput: FC<InputProps> = ({
  setPriceToFilter,
  initialValue = null,
  ...props
}) => {
  const [priceText, setPriceText] = useState(initialValue)
  const [inputIsActive, setInputIsActive] = useState(false)

  const handleOnBlur = useCallback(() => {
    setInputIsActive(false)
    setPriceToFilter(priceText)
  }, [priceText])

  const handleOnFocus = useCallback(() => {
    setInputIsActive(true)
  }, [])

  return (
    <Container size="s" inputIsActive={inputIsActive}>
      <BRLText inputIsActive={inputIsActive || !!priceText}>R$</BRLText>

      <Input
        {...props}
        value={priceText}
        onChangeValue={setPriceText}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onSubmitEditing={handleOnBlur}
        delimiter="."
        separator=","
        precision={2}
        keyboardType="numeric"
        inputSize="s"
        returnKeyType="done"
      />
    </Container>
  )
}

export default PriceInput
