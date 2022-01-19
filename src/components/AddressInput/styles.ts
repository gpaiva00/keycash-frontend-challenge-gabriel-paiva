import styled from 'styled-components'
import { FontAwesome5 } from '@expo/vector-icons'

import { margins } from '../../styles/margins'
import colors from '../../styles/colors'

interface IconProps {
  inputIsActive: boolean
}

export const Icon = styled(FontAwesome5)<IconProps>`
  color: ${({ inputIsActive }) =>
    inputIsActive ? colors.primary : colors.inputBorder};
  margin-right: ${margins.xxs};
`
