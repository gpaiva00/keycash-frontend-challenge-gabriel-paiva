import styled from 'styled-components'
import colors from '../../styles/colors'
import { sizes, margins } from '../../styles/margins'

export const Container = styled.View`
  background: ${colors.text};
  width: ${sizes.cardWidth};
  height: ${sizes.imageHeight};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
