import styled from 'styled-components'
import fonts from '../../styles/fonts'
import { sizes } from '../../styles/margins'

interface ValueTextProps {
  size?: 's' | 'l'
}

export const Container = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: ${sizes.cardWidth};
`

export const ValueText = styled.Text<ValueTextProps>`
  font-family: 'Roboto_900Black';
  font-size: ${({ size }) => fonts[size]};
  font-weight: bold;
`
