import {FC, React } from 'react'
import { Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

interface IconProps {
  name: string;
  size: number;
  color: string;
}

const ICONS = {
  'home': <MaterialCommunityIcons name="home" />,
  'heart': <FontAwesome5 name="heart" />,
}

const Icon: FC<IconProps> = ({ name, size, color }) => {
  const IconComponent = ICONS[name]
  return <IconComponent size={size} color={color} />
}

