import { NativeScrollEvent } from 'react-native'

export const isCloseToBottom = (layoutMeasurement: NativeScrollEvent) => {
  return (
    layoutMeasurement.contentOffset.y >=
    layoutMeasurement.contentSize.height -
      layoutMeasurement.layoutMeasurement.height
  )
}
