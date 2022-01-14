import React, { FC } from 'react'
import { Container, HomeIcon, Title } from './styles'

interface HeaderTitleProps {
  text: string;
  hasIcon: boolean;
}

const HeaderTitle: FC<HeaderTitleProps> = ({ text, hasIcon }) => (
  <Container>
    {hasIcon && <HomeIcon name="home" size={28} />}
    <Title>{text}</Title>
  </Container>
)

export default HeaderTitle