import React, { FC, InputHTMLAttributes, useCallback, useState } from 'react'

import Input from '../Input'

import { Icon } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setUsableAreaToFilter: (usableArea: number) => void
  initialValue?: number
}

const UsableAreaInput: FC<InputProps> = ({
  setUsableAreaToFilter,
  initialValue = 0,
  ...props
}) => {
  const [usableAreaText, setUsableAreaText] = useState(initialValue)
  const [inputIsActive, setInputIsActive] = useState(false)

  const handleOnBlur = useCallback(() => {
    setInputIsActive(false)
    setUsableAreaToFilter(usableAreaText)
  }, [usableAreaText])

  const handleOnFocus = useCallback(() => {
    setInputIsActive(true)
  }, [])

  return (
    <Input
      {...props}
      inputIsActive={inputIsActive}
      value={usableAreaText}
      onChangeText={setUsableAreaText}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onSubmitEditing={handleOnBlur}
      icon={
        <Icon
          name="ruler-square"
          inputIsActive={inputIsActive || !!usableAreaText}
          size={18}
        />
      }
      keyboardType="numeric"
      returnKeyType="done"
      inputSize="s"
    />
  )
}

export default UsableAreaInput
