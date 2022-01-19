import React, { FC } from 'react'
import { formatToCurrency } from '../../utils/formatToCurency'

import { Container, ValueText } from './styles'

interface PriceProps {
  value: number
  size?: 's' | 'l'
}

const Price: FC<PriceProps> = ({ value, size = 's' }) => {
  return (
    <Container>
      <ValueText size={size}>{formatToCurrency(value)}</ValueText>
    </Container>
  )
}

export default Price
