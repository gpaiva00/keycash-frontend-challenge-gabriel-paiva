import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import colors from '../../styles/colors'

import { Container } from './styles'

interface CardImageProps {
  images: string[]
}

const windowWidth = Dimensions.get('window').width - 40

const CardImage: FC<CardImageProps> = ({ images }) => {
  return (
    <Container>
      <SliderBox
        images={images}
        dotColor={colors.primary}
        circleLoop
        imageLoadingColor={colors.primary}
        parentWidth={windowWidth}
        activeOpacity={1}
        ImageComponentStyle={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
    </Container>
  )
}

export default CardImage
