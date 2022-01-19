import { Dimensions } from 'react-native'

export const getWindowSize = () => {
  const { width, height } = Dimensions.get('window')
  return { width, height }
}
