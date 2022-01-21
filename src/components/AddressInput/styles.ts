import styled from 'styled-components'
import Autocomplete from 'react-native-autocomplete-input'

import { FontAwesome5 } from '@expo/vector-icons'

import { margins } from '../../styles/margins'
import colors from '../../styles/colors'

interface IconProps {
  inputIsActive: boolean
}

const inputHeight = 45

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-width: 1px;
  border-color: ${({ inputIsActive }) =>
    inputIsActive ? colors.primary : colors.inputBorder};
  border-radius: 8px;

  width: ${({ size }) => (size === 's' ? '45%' : '100%')};
  padding-horizontal: ${margins.xs};
  height: ${`${inputHeight}px`};
`

export const Input = styled(Autocomplete)`
  min-width: 93%;
  height: 100%;
  border-width: 0;
`

export const Icon = styled(FontAwesome5)<IconProps>`
  color: ${({ inputIsActive }) =>
    inputIsActive ? colors.primary : colors.inputBorder};
  margin-right: ${margins.xxs};
`
