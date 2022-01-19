import React, { FC } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { PropertyAddress, PropertyFeatures } from '../../typings/IProperty'
import Address from '../Address'
import CardImage from '../CardImage'
import Price from '../Price'
import Features from '../PropertyFeatures'

import { Container, DescriptionContainer, PriceContainer } from './styles'
interface CardProps {
  images: string[]
  price: number
  address: PropertyAddress
  features: PropertyFeatures
  onPressCard: () => void
}

const Card: FC<CardProps> = ({
  images,
  price,
  address,
  features,
  onPressCard,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
      <Container>
        <CardImage images={images} size="s" />
        <DescriptionContainer>
          <PriceContainer>
            <Price value={price} />
          </PriceContainer>
          <Address address={address} />
          <Features features={features} onlyNumber size="s" />
        </DescriptionContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default Card
