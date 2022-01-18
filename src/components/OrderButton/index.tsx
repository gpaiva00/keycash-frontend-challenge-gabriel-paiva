import React, { FC } from 'react'

import { FontAwesome } from '@expo/vector-icons'

import Button from '../Button'
import colors from '../../styles/colors'

interface OrderButtonProps {
  onPress: () => void
}

const OrderButton: FC<OrderButtonProps> = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      text="Ordenar"
      size="s"
      variant="outlined"
      icon={<FontAwesome name="reorder" size={15} color={colors.primary} />}
    />
  )
}

export default OrderButton
