import styled from 'styled-components'
import { margins } from '../../styles/margins'

export const Container = styled.View`
  margin-top: ${margins.m};
  margin-horizontal: ${margins.s};
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${margins.xs};
`
