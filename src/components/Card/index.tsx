import React, { FC } from 'react'
import { PropertyAddress, PropertyFeatures } from '../../typings/IProperty'
import Address from '../Address'
import CardImage from '../CardImage'
import Price from '../Price'
import Features from '../PropertyFeatures'

import { Container, DescriptionContainer } from './styles'
interface CardProps {
  images: string[]
  price: number
  address: PropertyAddress
  features: PropertyFeatures
}

const Card: FC<CardProps> = ({ images, price, address, features }) => {
  return (
    <Container>
      <CardImage images={images} />
      <DescriptionContainer>
        <Price value={price} />
        <Address address={address} />
        <Features features={features} onlyNumber />
      </DescriptionContainer>
    </Container>
  )
}

export default Card
