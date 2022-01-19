import styled from 'styled-components'
import { sizes } from '../../styles/margins'

interface ContainerProps {
  size?: 's' | 'l'
}

export const Container = styled.View<ContainerProps>`
  width: ${sizes.cardWidth};
  height: ${({ size }) =>
    size === 's' ? sizes.smallImageHeight : sizes.largeImageHeight};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background: transparent;
`
