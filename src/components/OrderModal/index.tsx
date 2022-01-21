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
import usePersistedState from '../../hooks/usePersistedState'
import { ORDER_STORE_KEY } from '../../utils/storeKeys'

interface OrderModalProps {
  toggle: boolean
  setToggleOrderModal: React.Dispatch<React.SetStateAction<boolean>>
  setOrderToFilter: React.Dispatch<React.SetStateAction<'desc' | 'asc'>>
  orderToFilter: 'desc' | 'asc'
}

const iconSize = 26

const OrderModal: FC<OrderModalProps> = ({
  toggle,
  setToggleOrderModal,
  setOrderToFilter,
  orderToFilter,
}) => {
  const { getStoredData } = usePersistedState()

  const modalizeRef = useRef<Modalize>(null)
  const { storeData } = usePersistedState()

  const onPressItem = (key: number) => {
    const order = key === 0 ? 'desc' : 'asc'
    setOrderToFilter(order)
    storeData(ORDER_STORE_KEY, order)
    setTimeout(() => closeModal(), 500)
  }

  const getStoredOrder = async () => {
    const storedOrder = await getStoredData(ORDER_STORE_KEY)
    setOrderToFilter(storedOrder || 'desc')
  }

  const openModal = () => modalizeRef.current?.open()
  const closeModal = () => modalizeRef.current?.close()

  useEffect(() => {
    if (toggle === true) openModal()
    else closeModal()

    const getStoredData = async () => {
      await getStoredOrder()
    }

    getStoredData()
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
              {orderToFilter === 'desc' && (
                <FontAwesome
                  name="check-circle"
                  color={colors.primary}
                  size={iconSize}
                />
              )}
            </Item>
            <Item onPress={() => onPressItem(1)}>
              <ItemText>Menor preço</ItemText>
              {orderToFilter === 'asc' && (
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
