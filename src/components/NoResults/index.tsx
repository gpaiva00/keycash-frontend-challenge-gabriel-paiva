import React, { FC } from 'react'

import { Container, NoResultsText, AddressIcon } from './styles'

const NoResults: FC = () => {
  return (
    <Container>
      <AddressIcon name="map-marker-alt" size={20} />
      <NoResultsText>Nenhum imóvel encontrado</NoResultsText>
    </Container>
  )
}

export default NoResults
