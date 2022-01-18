import React, { FC, useEffect, useRef, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

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

import Button from '../Button'
import Input from '../Input'
import AddressInput from '../AddressInput'

interface FilterModalProps {
  toggle: boolean
  setToggleFilterModal: React.Dispatch<React.SetStateAction<boolean>>
}

const buttonsToFilterCount = 5

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

  const onAddressBlur = props => {
    // not working
    console.warn(props.target.value)
  }

  useEffect(() => {
    if (toggle === true) openModal()
    else closeModal()
  }, [toggle])

  return (
    <>
      <Modalize
        ref={modalizeRef}
        snapPoint={500}
        modalHeight={750} // screen height - header height
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
                <AddressInput onBlur={onAddressBlur} onSubmit={onAddressBlur} />
              </ItemContent>
            </Item>
            <Item>
              <ItemText>Faixa de preço</ItemText>
              <ItemContent></ItemContent>
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
              <ItemText>Área útil</ItemText>
              <ItemContent></ItemContent>
            </Item>
          </OptionsContainer>
          <Button text="Aplicar filtros" onPress={() => {}} />
        </Container>
      </Modalize>
    </>
  )
}

export default FilterModal
