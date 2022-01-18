import React, { FC, useEffect, useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize'

import {
  Container,
  HeaderContainer,
  Item,
  ItemText,
  OptionsContainer,
  Title,
} from './styles'
import colors from '../../styles/colors'

interface OrderModalProps {
  toggle: boolean
  setToggleOrderModal: React.Dispatch<React.SetStateAction<boolean>>
}

const iconSize = 26

const OrderModal: FC<OrderModalProps> = ({ toggle, setToggleOrderModal }) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const modalizeRef = useRef<Modalize>(null)

  const onPressItem = (key: number) => {
    setSelectedItem(key)
    closeModal
  }

  const openModal = () => modalizeRef.current?.open()
  const closeModal = () => modalizeRef.current?.close()

  useEffect(() => {
    if (toggle === true) openModal()
    else closeModal()
  }, [toggle])

  return (
    <>
      <Modalize
        ref={modalizeRef}
        snapPoint={280}
        modalHeight={280}
        onClose={() => setToggleOrderModal(false)}
      >
        <Container>
          <HeaderContainer>
            <Title>Ordenar por</Title>
          </HeaderContainer>
          <OptionsContainer>
            <Item onPress={() => onPressItem(0)}>
              <ItemText>Maior preço</ItemText>
              {selectedItem === 0 && (
                <FontAwesome
                  name="check-circle"
                  color={colors.primary}
                  size={iconSize}
                />
              )}
            </Item>
            <Item onPress={() => onPressItem(1)}>
              <ItemText>Menor preço</ItemText>
              {selectedItem === 1 && (
                <FontAwesome
                  name="check-circle"
                  color={colors.primary}
                  size={iconSize}
                />
              )}
            </Item>
          </OptionsContainer>
        </Container>
      </Modalize>
    </>
  )
}

export default OrderModal
