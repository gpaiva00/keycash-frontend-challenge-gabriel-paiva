import React, { FC } from 'react'
import { formatToCurrency } from '../../utils/formatToCurency'

import { Container, ValueText } from './styles'

interface PriceProps {
  value: number
}

const Price: FC<PriceProps> = ({ value }) => {
  return (
    <Container>
      <ValueText>{formatToCurrency(value)}</ValueText>
    </Container>
  )
}

export default Price
