import styled from 'styled-components'
import colors from '../../styles/colors'
import { sizes, margins } from '../../styles/margins'

export const Container = styled.View`
  /* align-items: flex-start; */
  background: ${colors.background};
  border-radius: 8px;
  width: ${sizes.cardWidth};
  height: ${sizes.cardHeight};
  margin-bottom: ${margins.m};

  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: ${colors.text};
  shadow-offset: 0px 0px;
`

export const DescriptionContainer = styled.View`
  margin: ${margins.xs};
`
