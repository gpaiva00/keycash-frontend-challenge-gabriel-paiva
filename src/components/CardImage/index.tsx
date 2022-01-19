import React, { FC } from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import colors from '../../styles/colors'

import { getWindowSize } from '../../utils/getWindowSize'
import { Container } from './styles'
interface CardImageProps {
  images: string[]
  size?: 's' | 'l'
}

const CardImage: FC<CardImageProps> = ({ size, images }) => {
  const windowWidth = getWindowSize().width - (size === 's' ? 40 : 0)

  return (
    <Container size={size}>
      <SliderBox
        images={images}
        dotColor={colors.primary}
        circleLoop
        imageLoadingColor={colors.primary}
        parentWidth={windowWidth}
        activeOpacity={1}
        sliderBoxHeight={size === 's' ? 200 : 300}
      />
    </Container>
  )
}

export default CardImage
