import React, { FC } from 'react'
import { TouchableOpacity, Share } from 'react-native'

import colors from '../../styles/colors'
import { Feather } from '@expo/vector-icons'

const HeaderShareButton: FC = () => {
  const handleShareButtonPress = () => {
    Share.share({
      message: 'Compartilhe seu imóvel com os amigos!',
    })
  }
  return (
    <TouchableOpacity onPress={handleShareButtonPress}>
      <Feather name="share" size={24} color={colors.primary} />
    </TouchableOpacity>
  )
}

export default HeaderShareButton
