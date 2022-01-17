import React, { FC } from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import colors from '../../styles/colors'

import { Container } from './styles'

interface CardImageProps {
  images: string[]
}

const CardImage: FC<CardImageProps> = ({ images }) => {
  return (
    <Container>
      <SliderBox
        images={images}
        dotColor={colors.primary}
        circleLoop
        imageLoadingColor={colors.primary}
        activeOpacity={1}
      />
    </Container>
  )
}

export default CardImage
