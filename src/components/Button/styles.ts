import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { margins } from '../../styles/margins'

interface ButtonProps {
  size?: 's' | 'm' | 'l'
  variant?: 'primary' | 'secondary' | 'outlined'
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: ${margins.s};

  padding: ${margins.xs};
  border-radius: 8px;
  border-width: ${({ variant }) => (variant === 'outlined' ? '1px' : 0)};
  border-color: ${({ variant }) =>
    variant === 'outlined' ? colors.primary : ''};

  background: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return colors.primary
      case 'secondary':
        return colors.secondary
      case 'outlined':
        return 'transparent'
      default:
        return colors.primary
    }
  }};

  shadow-opacity: 0.5;
  shadow-radius: 3px;
  shadow-color: ${colors.text};
  shadow-offset: 0px 0px;
`

export const Text = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${fonts.s};
  font-weight: bold;

  margin-left: ${margins.xs};

  color: ${({ variant }) => (variant === 'outlined' ? colors.primary : '')};
`
