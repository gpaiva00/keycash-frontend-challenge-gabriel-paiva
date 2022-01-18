import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import Card from '../../components/Card'

import { Container, ButtonsContainer } from './styles'

import propertyMock from '../../utils/mocks/properties.json'
import OrderButton from '../../components/OrderButton'
import FilterButton from '../../components/FilterButton'

const Home: FC = () => {
  return (
    <ScrollView>
      <Container>
        <ButtonsContainer>
          <OrderButton onPress={() => {}} />
          <FilterButton onPress={() => {}} />
        </ButtonsContainer>

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
