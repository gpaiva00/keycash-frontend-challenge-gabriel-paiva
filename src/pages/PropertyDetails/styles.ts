import styled from 'styled-components'
import fonts from '../../styles/fonts'
import { margins, sizes } from '../../styles/margins'
import MapView from 'react-native-maps'

export const Container = styled.View`
  margin-bottom: 280px;
`

export const PriceContainer = styled.View`
  margin-top: -190px;
`

export const Title = styled.Text`
  font-family: 'Roboto_900Black';
  font-size: ${fonts.l};
  padding-top: ${margins.s};
  padding-bottom: ${margins.xs};
`

export const FeaturesContainer = styled.View``

export const LocationContainer = styled.View``

export const MapLocation = styled(MapView)`
  width: 100%;
  height: ${sizes.cardHeight};
`

export const ContentContainer = styled.View`
  margin-horizontal: ${margins.s};
`
