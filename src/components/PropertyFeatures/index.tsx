import React, { FC } from 'react'

import {
  Container,
  FeatureContainer,
  Description,
  Icon,
  IconContainer,
} from './styles'

import { PropertyFeatures as IPropertyFeatures } from '../../typings/IProperty'

interface PropertyFeaturesProps {
  features: IPropertyFeatures
  onlyNumber?: boolean
  size?: 's' | 'l'
}

const PropertyFeatures: FC<PropertyFeaturesProps> = ({
  features,
  onlyNumber,
  size = 's',
}) => {
  const iconSize = size === 's' ? 24 : 30

  return (
    <Container>
      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer size={size}>
          <Icon name="bed" size={iconSize} />
        </IconContainer>
        <Description onlyNumber={onlyNumber}>
          {features.bedrooms} {!onlyNumber && 'quartos'}
        </Description>
      </FeatureContainer>

      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer size={size}>
          <Icon name="shower" size={iconSize} />
        </IconContainer>
        <Description onlyNumber={onlyNumber}>
          {features.bathrooms} {!onlyNumber && 'banheiros'}
        </Description>
      </FeatureContainer>

      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer size={size}>
          <Icon name="car" size={iconSize} />
        </IconContainer>
        <Description onlyNumber={onlyNumber}>
          {features.parkingSpaces} {!onlyNumber && 'vagas'}
        </Description>
      </FeatureContainer>

      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer size={size}>
          <Icon name="ruler-square" size={iconSize} />
        </IconContainer>
        <Description size={size} onlyNumber={onlyNumber}>
          {`${features.usableArea}m2`}
          {/* {!onlyNumber && 'área útil'} */}
        </Description>
      </FeatureContainer>
    </Container>
  )
}

export default PropertyFeatures
