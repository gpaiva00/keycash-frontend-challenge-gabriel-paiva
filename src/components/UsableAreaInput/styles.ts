import styled from 'styled-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { margins } from '../../styles/margins'
import colors from '../../styles/colors'

interface IconProps {
  inputIsActive: boolean
}

export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  color: ${({ inputIsActive }) =>
    inputIsActive ? colors.primary : colors.inputBorder};
  margin-right: ${margins.xxs};
`
