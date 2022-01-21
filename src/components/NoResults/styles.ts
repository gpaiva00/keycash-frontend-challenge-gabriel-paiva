import styled from 'styled-components'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { margins } from '../../styles/margins'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${margins.m};
  padding-vertical: ${margins.xl};
`

export const NoResultsText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: ${fonts.m};
  color: ${colors.inputBorder};
  margin-left: ${margins.xs};
`

export const AddressIcon = styled(FontAwesome5)`
  color: ${colors.inputBorder};
`
