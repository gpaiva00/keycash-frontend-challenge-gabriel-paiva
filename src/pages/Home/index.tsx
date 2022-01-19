import React, { FC, useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../../components/Card'

import { Container, ButtonsContainer } from './styles'

import propertyMock from '../../utils/mocks/properties.json'
import OrderButton from '../../components/OrderButton'
import FilterButton from '../../components/FilterButton'
import OrderModal from '../../components/OrderModal'
import FilterModal from '../../components/FilterModal'
import { Property } from '../../typings/IProperty'

const Home: FC = () => {
  const [toggleOrderModal, setToggleOrderModal] = useState(false)
  const [toggleFilterModal, setToggleFilterModal] = useState(false)

  const { navigate } = useNavigation()

  const handleCardPress = (property: Property) => {
    navigate('PropertyDetails', { property })
  }

  return (
    <>
      <ScrollView>
        <Container>
          <ButtonsContainer>
            <OrderButton onPress={() => setToggleOrderModal(true)} />
            <FilterButton onPress={() => setToggleFilterModal(true)} />
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
                onPressCard={() => handleCardPress(property)}
              />
            )
          })}
        </Container>
      </ScrollView>
      <OrderModal
        toggle={toggleOrderModal}
        setToggleOrderModal={setToggleOrderModal}
      />
      <FilterModal
        toggle={toggleFilterModal}
        setToggleFilterModal={setToggleFilterModal}
      />
    </>
  )
}

export default Home
