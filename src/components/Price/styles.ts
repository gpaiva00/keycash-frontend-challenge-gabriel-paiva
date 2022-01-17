import styled from 'styled-components'
import fonts from '../../styles/fonts'
import { sizes, margins } from '../../styles/margins'

export const Container = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: ${sizes.cardWidth};
  margin-bottom: ${margins.s};
`

export const ValueText = styled.Text`
  font-size: ${fonts.s};
  font-weight: bold;
`
