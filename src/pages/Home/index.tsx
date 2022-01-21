import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../../components/Card'

import { Container, ButtonsContainer } from './styles'

import OrderButton from '../../components/OrderButton'
import FilterButton from '../../components/FilterButton'
import OrderModal from '../../components/OrderModal'
import FilterModal from '../../components/FilterModal'
import { Property } from '../../typings/IProperty'
import Loading from '../../components/Loading'

import api from '../../services/api'
import defaultFilterParams from '../../utils/defaultFilterParams'
import NoResults from '../../components/NoResults'
import usePersistedState from '../../hooks/usePersistedState'
import { FILTER_STORE_KEY } from '../../utils/storeKeys'
import { isCloseToBottom } from '../../utils/isCloseToBottom'

const Home: FC = () => {
  const { getStoredData } = usePersistedState()

  const [toggleOrderModal, setToggleOrderModal] = useState(false)
  const [toggleFilterModal, setToggleFilterModal] = useState(false)

  const [orderToFilter, setOrderToFilter] = useState<string | null>(null)

  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const { navigate } = useNavigation()

  const handleCardPress = (property: Property) => {
    navigate('PropertyDetails', { property })
  }

  const getProperties = async (filters?: Property | null) => {
    setIsLoading(true)

    const paramFilters = filters || (await getStoredData(FILTER_STORE_KEY))

    const response = await api.get('/', {
      params: {
        ...defaultFilterParams,
        _order: orderToFilter,
        // _page: page,
        ...paramFilters,
      },
    })

    setProperties(response.data)

    setIsLoading(false)
  }

  useEffect(() => {
    // setPage(1)
    setProperties([])
    getProperties()

    setToggleOrderModal(false)
    setToggleFilterModal(false)
  }, [orderToFilter])

  return (
    <>
      <ScrollView
      // onScroll={({ nativeEvent }) => {
      //   if (isCloseToBottom(nativeEvent)) {
      //     // setPage(page + 1)
      //     getProperties()
      //   }
      // }}
      // scrollEventThrottle={500}
      >
        <Container>
          <ButtonsContainer>
            <OrderButton onPress={() => setToggleOrderModal(true)} />
            <FilterButton onPress={() => setToggleFilterModal(true)} />
          </ButtonsContainer>

          {!isLoading && !properties.length ? (
            <NoResults />
          ) : (
            properties.map(property => {
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
            })
          )}
          {isLoading && <Loading />}
        </Container>
      </ScrollView>
      <OrderModal
        setOrderToFilter={setOrderToFilter}
        orderToFilter={orderToFilter}
        toggle={toggleOrderModal}
        setToggleOrderModal={setToggleOrderModal}
      />
      <FilterModal
        toggle={toggleFilterModal}
        setToggleFilterModal={setToggleFilterModal}
        setFilters={getProperties}
      />
    </>
  )
}

export default Home
