import React, { FC } from 'react'
import { ScrollView, Text } from 'react-native'
import Card from '../../components/Card'
import { Container } from './styles'

import propertyMock from '../../utils/mocks/properties.json'

const Home: FC = () => {
  return (
    <ScrollView>
      <Container>
        {propertyMock.map(property => {
          const propertyFeatures = {
            bathrooms: property.bathrooms,
            bedrooms: property.bedrooms,
            parkingSpaces: property.parkingSpaces,
            usableArea: property.usableArea,
          }

          return (
            <Card
              key={property.id}
              images={property.images}
              price={property.price}
              address={property.address}
              features={propertyFeatures}
            />
          )
        })}
      </Container>
    </ScrollView>
  )
}

export default Home
