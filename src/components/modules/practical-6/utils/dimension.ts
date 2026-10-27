import { Dimensions, PixelRatio, Platform } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export const widthPercentageToDP = (widthPercent: number | string): number => {
    const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100)
}

export const heightPercentageToDP = (heightPercent: number | string): number => {
    const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent)
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100)
}

export const wp = widthPercentageToDP
export const hp = heightPercentageToDP

// Normalize helper matching react-native-normalize (based on 375pt base width)
export const normalize = (size: number, based: 'width' | 'height' = 'width'): number => {
    const scale = based === 'height' ? SCREEN_HEIGHT / 667 : SCREEN_WIDTH / 375
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

export default normalize
