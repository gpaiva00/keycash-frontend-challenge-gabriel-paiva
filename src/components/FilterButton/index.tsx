import React, { FC } from 'react'

import { FontAwesome5 } from '@expo/vector-icons'

import Button from '../Button'
import colors from '../../styles/colors'

interface FilterButtonProps {
  onPress: () => void
}

const FilterButton: FC<FilterButtonProps> = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      text="Filtrar"
      size="xs"
      variant="outlined"
      icon={<FontAwesome5 name="filter" size={15} color={colors.primary} />}
    />
  )
}

export default FilterButton
