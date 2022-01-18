import styled from 'styled-components'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { sizes, margins } from '../../styles/margins'

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: ${sizes.cardWidth};
  margin-bottom: ${margins.s};
`

export const AddressText = styled.Text`
  font-family: 'Roboto_300Light';
  font-size: ${fonts.s};
  margin-left: ${margins.xxs};
  color: ${colors.text};
`

export const AddressIcon = styled(FontAwesome5)`
  color: ${colors.primary};
`
