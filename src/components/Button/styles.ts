import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { margins } from '../../styles/margins'

interface ButtonProps {
  size?: 's' | 'm' | 'l'
  variant?: 'primary' | 'secondary' | 'outlined'
  hasIcon?: boolean
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: ${({ hasIcon }) => (hasIcon ? 'space-between' : 'center')};
  align-items: center;
  margin-bottom: ${margins.s};

  padding: ${({ size }) => margins[size]};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.primary};

  background: ${({ variant }) =>
    variant === 'outlined' ? 'transparent' : colors[variant]};

  shadow-opacity: 0.5;
  shadow-radius: 3px;
  shadow-color: ${colors.text};
  shadow-offset: 0px 0px;
`

export const Text = styled.Text<ButtonProps>`
  font-family: 'Roboto_400Regular';
  font-size: ${({ hasIcon }) => (hasIcon ? fonts.s : fonts.m)};
  font-weight: bold;

  margin-left: ${({ hasIcon }) => (hasIcon ? margins.xs : 0)};

  color: ${({ variant }) =>
    variant === 'outlined' ? colors.primary : colors.background};
`
