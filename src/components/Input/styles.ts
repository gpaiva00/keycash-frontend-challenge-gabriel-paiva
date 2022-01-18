import styled from 'styled-components'
import colors from '../../styles/colors'
import { margins } from '../../styles/margins'

export const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: ${colors.inputBorder};
  border-radius: 8px;

  width: 100%;
  padding: ${margins.xs};
`

export const Input = styled.TextInput``
