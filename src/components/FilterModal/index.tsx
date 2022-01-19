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

interface FilterModalProps {
  toggle: boolean
  setToggleFilterModal: React.Dispatch<React.SetStateAction<boolean>>
}

const buttonsToFilterCount = 5
const modalHeight = getWindowSize().height - 120

const FilterModal: FC<FilterModalProps> = ({
  toggle,
  setToggleFilterModal,
}) => {
  const [bedRoomCount, setBedRoomCount] = useState(0)
  const [bathRoomCount, setBathRoomCount] = useState(0)
  const [parkingSpaceCount, setParkingSpaceCount] = useState(0)

  const modalizeRef = useRef<Modalize>(null)

  const openModal = () => modalizeRef.current?.open()
  const closeModal = () => modalizeRef.current?.close()

  const setAddressToFilter = (address: string) => {
    // console.warn('address', address)
  }

  const setPriceToFilter = ({ price, type }: PriceInputProps) => {
    // console.warn({ type, price })
  }

  const setUsableAreaToFilter = ({
    usableArea,
    type,
  }: UsableAreaInputProps) => {
    // console.warn({ type, usableArea })
  }

  const handleApplyFilters = () => {
    closeModal()
  }

  useEffect(() => {
    if (toggle === true) openModal()
    else closeModal()
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
                <AddressInput setAddressToFilter={setAddressToFilter} />
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
                />
                <PriceInput
                  setPriceToFilter={price =>
                    setPriceToFilter({ price, type: 'max' })
                  }
                  placeholder="preço máximo"
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
                      onPress={() => setBedRoomCount(index)}
                      variant={bedRoomCount === index ? 'primary' : 'outlined'}
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
                      onPress={() => setBathRoomCount(index)}
                      variant={bathRoomCount === index ? 'primary' : 'outlined'}
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
                      onPress={() => setParkingSpaceCount(index)}
                      variant={
                        parkingSpaceCount === index ? 'primary' : 'outlined'
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
                />
                <UsableAreaInput
                  setUsableAreaToFilter={usableArea =>
                    setUsableAreaToFilter({ usableArea, type: 'max' })
                  }
                  inputSize="s"
                  placeholder="até"
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
