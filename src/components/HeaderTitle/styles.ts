import styled from 'styled-components/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { margins } from '../../styles/margins'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${fonts.m};
  color: ${colors.primary};
  font-weight: bold;
  text-transform: capitalize;
`

export const HomeIcon = styled(MaterialCommunityIcons)`
  color: ${colors.primary};
  margin-right: ${margins.xs};
`
