import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native'

import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import CardImage from '../../components/CardImage'
import Price from '../../components/Price'
import PropertyFeatures from '../../components/PropertyFeatures'
import { Property } from '../../typings/IProperty'
import Address from '../../components/Address'
import { ScrollView } from 'react-native'

import {
  Container,
  ContentContainer,
  MapLocation,
  PriceContainer,
  Title,
} from './styles'

interface PropertyDetailsProps {}

interface RouteParams {
  property: Property
}

const PropertyDetails: FC<PropertyDetailsProps> = () => {
  const { params } = useRoute()
  const { property } = params as RouteParams

  const propertyFeatures = {
    bathrooms: property.bathrooms,
    bedrooms: property.bedrooms,
    parkingSpaces: property.parkingSpaces,
    usableArea: property.usableArea,
  }

  const propertyLocation = {
    latitude: property.address.geolocation.lat,
    longitude: property.address.geolocation.lng,
  }

  return (
    <ScrollView>
      <Container>
        <CardImage size="l" images={property.images} />
        <ContentContainer>
          <PriceContainer>
            <Price size="l" value={property.price} />
          </PriceContainer>
          <Title>Características</Title>
          <PropertyFeatures features={propertyFeatures} size="l" />
          <Title>Localização</Title>
          <Address address={property.address} />
        </ContentContainer>
        <MapLocation
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: propertyLocation.latitude,
            longitude: propertyLocation.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
          }}
          minZoomLevel={15}
        >
          <Marker
            coordinate={propertyLocation}
            title="Keycash"
            description={property.address.formattedAddress}
          />
        </MapLocation>
      </Container>
    </ScrollView>
  )
}

export default PropertyDetails
