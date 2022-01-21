import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../../styles/colors'

import { Container } from './styles'

const Loading: FC = () => (
  <Container>
    <ActivityIndicator size={30} color={colors.primary} />
  </Container>
)

export default Loading
