import React, { FC } from 'react'

import { Container, AddressText, AddressIcon } from './styles'
import { PropertyAddress } from '../../typings/IProperty'

interface AddressCompProps {
  address: PropertyAddress
}

const Address: FC<AddressCompProps> = ({ address }) => {
  return (
    <Container>
      <AddressIcon name="map-marker-alt" size={15} />
      <AddressText>{address.formattedAddress}</AddressText>
    </Container>
  )
}

export default Address
