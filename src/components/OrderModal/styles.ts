import styled from 'styled-components'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { margins } from '../../styles/margins'

export const Container = styled.View`
  margin: ${margins.s};
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: ${margins.m};
`

export const Title = styled.Text`
  font-family: 'Roboto_900Black';
  font-size: ${fonts.l};
`

export const OptionsContainer = styled.View``

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colors.inputBorder};
  margin-bottom: ${margins.s};
  padding-bottom: ${margins.s};
`

export const ItemText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${fonts.l};
`
