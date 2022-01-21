import styled from 'styled-components'
import CurrencyInput from 'react-native-currency-input'

import { margins } from '../../styles/margins'
import colors from '../../styles/colors'

interface TextProps {
  inputIsActive: boolean
}

export const BRLText = styled.Text<TextProps>`
  color: ${({ inputIsActive }) =>
    inputIsActive ? colors.primary : colors.inputBorder};
  font-family: 'Roboto_700Bold';
  margin-right: ${margins.xxs};
`

export const Input = styled(CurrencyInput)`
  width: 85%;
  height: 100%;
`
