import styled from 'styled-components'
import colors from '../../styles/colors'
import { margins } from '../../styles/margins'

interface ContainerProps {
  size: 's' | 'm' | 'l'
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

export const Input = styled.TextInput`
  width: 85%;
  height: 100%;
`
