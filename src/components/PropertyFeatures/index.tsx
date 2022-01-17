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
}

const iconSize = 24

const PropertyFeatures: FC<PropertyFeaturesProps> = ({
  features,
  onlyNumber,
}) => {
  return (
    <Container>
      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer>
          <Icon name="bed" size={iconSize} />
        </IconContainer>
        <Description>
          {features.bedrooms} {!onlyNumber && 'quartos'}
        </Description>
      </FeatureContainer>

      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer>
          <Icon name="shower" size={iconSize} />
        </IconContainer>
        <Description>
          {features.bathrooms} {!onlyNumber && 'banheiros'}
        </Description>
      </FeatureContainer>

      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer>
          <Icon name="car" size={iconSize} />
        </IconContainer>
        <Description>
          {features.parkingSpaces} {!onlyNumber && 'vagas'}
        </Description>
      </FeatureContainer>

      <FeatureContainer onlyNumber={onlyNumber}>
        <IconContainer>
          <Icon name="ruler-square" size={iconSize} />
        </IconContainer>
        <Description>
          {`${features.usableArea}m2`} {!onlyNumber && 'área útil'}
        </Description>
      </FeatureContainer>
    </Container>
  )
}

export default PropertyFeatures
