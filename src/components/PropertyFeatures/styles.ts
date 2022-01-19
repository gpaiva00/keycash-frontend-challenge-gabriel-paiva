import styled from 'styled-components'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { sizes, margins } from '../../styles/margins'

interface FeatureContainerProps {
  onlyNumber?: boolean
  size?: 's' | 'l'
}

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${sizes.cardWidth};
  margin-bottom: ${margins.s};

  /* background: #e2e2e2; */
`

export const FeatureContainer = styled.View<FeatureContainerProps>`
  justify-content: center;
  align-items: center;
  flex-direction: ${({ onlyNumber }) => (onlyNumber ? `row` : `column`)};
  /* margin-horizontal: 10px; */

  /* background: lightblue; */
`

export const Description = styled.Text<FeatureContainerProps>`
  text-align: center;
  font-family: 'Roboto_300Light';
  font-size: ${fonts.s};
  margin: ${({ onlyNumber }) =>
    onlyNumber ? `0 ${margins.xxs}` : `${margins.xxs} 0`};
  color: ${colors.text};
  max-width: ${({ size }) => (size === 'l' ? '75px' : '100%')};
`

export const IconContainer = styled.View<FeatureContainerProps>`
  justify-content: center;
  align-items: center;
  height: ${({ size }) =>
    size === 's'
      ? sizes.propertyFeatureCircleSizeSmall
      : sizes.propertyFeatureCircleSizeLarge};
  width: ${({ size }) =>
    size === 's'
      ? sizes.propertyFeatureCircleSizeSmall
      : sizes.propertyFeatureCircleSizeLarge};
  background: ${colors.primary};
  border-radius: 50px;

  shadow-opacity: 0.5;
  shadow-radius: 3px;
  shadow-color: ${colors.text};
  shadow-offset: 0px 0px;
`

export const Icon = styled(MaterialCommunityIcons)`
  color: ${colors.background};
`
