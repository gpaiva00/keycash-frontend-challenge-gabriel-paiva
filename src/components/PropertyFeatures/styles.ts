import styled from 'styled-components'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { sizes, margins } from '../../styles/margins'

interface FeatureContainerProps {
  onlyNumber?: boolean
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: ${sizes.cardWidth};
  margin-bottom: ${margins.s};
`

export const FeatureContainer = styled.View<FeatureContainerProps>`
  justify-content: center;
  align-items: center;
  flex-direction: ${({ onlyNumber }) => (onlyNumber ? `row` : `column`)};
  margin-horizontal: 10px;
`

export const Description = styled.Text`
  font-size: ${fonts.s};
  margin-left: ${margins.xs};
  color: ${colors.text};
`

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${sizes.propertyFeatureCircleSize};
  width: ${sizes.propertyFeatureCircleSize};
  background: ${colors.primary};
  border-radius: 50px;
`

export const Icon = styled(MaterialCommunityIcons)`
  color: ${colors.background};
`
