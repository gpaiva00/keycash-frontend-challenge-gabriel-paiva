import React, { FC, useEffect, useRef, useState } from 'react'

import { Modalize } from 'react-native-modalize'

import {
  Container,
  HeaderContainer,
  Item,
  ItemContent,
  ItemText,
  OptionsContainer,
  Title,
} from './styles'

import { getWindowSize } from '../../utils/getWindowSize'
import Button from '../Button'
import AddressInput from '../AddressInput'
import PriceInput from '../PriceInput'
import { PriceInputProps, UsableAreaInputProps } from '../../typings/IInput'
import UsableAreaInput from '../UsableAreaInput'
import { Property } from '../../typings/IProperty'
import usePersistedState from '../../hooks/usePersistedState'
import { FILTER_STORE_KEY } from '../../utils/storeKeys'

interface FilterModalProps {
  toggle: boolean
  setToggleFilterModal: React.Dispatch<React.SetStateAction<boolean>>
  setFilters: (filters: Property) => void
}

const buttonsToFilterCount = 5
const modalHeight = getWindowSize().height - 120

const FilterModal: FC<FilterModalProps> = ({
  toggle,
  setToggleFilterModal,
  setFilters,
}) => {
  const { storeData, getStoredData } = usePersistedState()

  const [bedRoomCount, setBedRoomCount] = useState<number | null>(null)
  const [bathRoomCount, setBathRoomCount] = useState<number | null>(null)
  const [parkingSpaceCount, setParkingSpaceCount] = useState<number | null>(
    null
  )
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [minUsableArea, setMinUsableArea] = useState(0)
  const [maxUsableArea, setMaxUsableArea] = useState(0)
  const [address, setAddress] = useState('')

  const modalizeRef = useRef<Modalize>(null)

  const openModal = () => modalizeRef.current?.open()
  const closeModal = () => modalizeRef.current?.close()

  const setPriceToFilter = ({ price, type }: PriceInputProps) => {
    if (type === 'min') setMinPrice(price)
    if (type === 'max') setMaxPrice(price)
  }

  const setUsableAreaToFilter = ({
    usableArea,
    type,
  }: UsableAreaInputProps) => {
    if (type === 'min') setMinUsableArea(usableArea)
    if (type === 'max') setMaxUsableArea(usableArea)
  }

  const handleApplyFilters = () => {
    const filters: Property = {
      'address.formattedAddress_like': !!address ? address : null,
      bedrooms: bedRoomCount || null,
      bathrooms: bathRoomCount || null,
      parkingSpaces: parkingSpaceCount || null,
      price_gte: !!minPrice ? minPrice : null,
      price_lte: !!maxPrice ? maxPrice : null,
      usableArea_gte: !!minUsableArea ? minUsableArea : null,
      usableArea_lte: !!maxUsableArea ? maxUsableArea : null,
    }

    storeData(FILTER_STORE_KEY, filters)
    setFilters(filters)
    closeModal()
  }

  const handleBedRoomsButtonPress = (index: number) => {
    if (bedRoomCount === index) return setBedRoomCount(null)
    setBedRoomCount(index)
  }

  const getStoredFilters = async () => {
    const filters = await getStoredData(FILTER_STORE_KEY)
    if (filters) {
      setAddress(filters['address.formattedAddress_like'])
      setBedRoomCount(filters.bedrooms)
      setBathRoomCount(filters.bathrooms)
      setParkingSpaceCount(filters.parkingSpaces)
      setMinPrice(filters.price_gte)
      setMaxPrice(filters.price_lte)
      setMinUsableArea(filters.usableArea_gte)
      setMaxUsableArea(filters.usableArea_lte)
    }
  }

  const handleBathRoomsButtonPress = (index: number) => {
    if (bathRoomCount === index) return setBathRoomCount(null)
    setBathRoomCount(index)
  }

  const handleParkingSpacesButtonPress = (index: number) => {
    if (parkingSpaceCount === index) return setParkingSpaceCount(null)
    setParkingSpaceCount(index)
  }

  useEffect(() => {
    if (toggle === true) openModal()
    else closeModal()

    const getStoredData = async () => {
      await getStoredFilters()
    }

    getStoredData()
  }, [toggle])

  return (
    <>
      <Modalize
        ref={modalizeRef}
        snapPoint={modalHeight}
        modalHeight={modalHeight}
        onClose={() => setToggleFilterModal(false)}
      >
        <Container>
          <HeaderContainer>
            <Title>Filtrar por</Title>
          </HeaderContainer>
          <OptionsContainer>
            <Item>
              <ItemText>Endereço</ItemText>
              <ItemContent>
                <AddressInput
                  initialValue={address}
                  setAddressToFilter={setAddress}
                />
              </ItemContent>
            </Item>
            <Item>
              <ItemText>Faixa de preço</ItemText>
              <ItemContent>
                <PriceInput
                  setPriceToFilter={price =>
                    setPriceToFilter({ price, type: 'min' })
                  }
                  placeholder="preço mínimo"
                  initialValue={minPrice}
                />
                <PriceInput
                  setPriceToFilter={price =>
                    setPriceToFilter({ price, type: 'max' })
                  }
                  placeholder="preço máximo"
                  initialValue={minPrice}
                />
              </ItemContent>
            </Item>
            <Item>
              <ItemText>Quartos</ItemText>
              <ItemContent>
                {Array.from({ length: buttonsToFilterCount }).map(
                  (_, index) => (
                    <Button
                      key={index}
                      text={`${index + 1}`}
                      onPress={() => handleBedRoomsButtonPress(index + 1)}
                      variant={
                        bedRoomCount === index + 1 ? 'primary' : 'outlined'
                      }
                      size="s"
                    />
                  )
                )}
              </ItemContent>
            </Item>
            <Item>
              <ItemText>Banheiros</ItemText>
              <ItemContent>
                {Array.from({ length: buttonsToFilterCount }).map(
                  (_, index) => (
                    <Button
                      key={index}
                      text={`${index + 1}`}
                      onPress={() => handleBathRoomsButtonPress(index + 1)}
                      variant={
                        bathRoomCount === index + 1 ? 'primary' : 'outlined'
                      }
                      size="s"
                    />
                  )
                )}
              </ItemContent>
            </Item>
            <Item>
              <ItemText>Vagas</ItemText>
              <ItemContent>
                {Array.from({ length: buttonsToFilterCount }).map(
                  (_, index) => (
                    <Button
                      key={index}
                      text={`${index + 1}`}
                      onPress={() => handleParkingSpacesButtonPress(index + 1)}
                      variant={
                        parkingSpaceCount === index + 1 ? 'primary' : 'outlined'
                      }
                      size="s"
                    />
                  )
                )}
              </ItemContent>
            </Item>
            <Item>
              <ItemText>Área útil (m2)</ItemText>
              <ItemContent>
                <UsableAreaInput
                  setUsableAreaToFilter={usableArea =>
                    setUsableAreaToFilter({ usableArea, type: 'min' })
                  }
                  inputSize="s"
                  placeholder="de"
                  initialValue={minUsableArea}
                />
                <UsableAreaInput
                  setUsableAreaToFilter={usableArea =>
                    setUsableAreaToFilter({ usableArea, type: 'max' })
                  }
                  inputSize="s"
                  placeholder="até"
                  initialValue={maxUsableArea}
                />
              </ItemContent>
            </Item>
          </OptionsContainer>
          <Button text="Aplicar filtros" onPress={handleApplyFilters} />
        </Container>
      </Modalize>
    </>
  )
}

export default FilterModal
