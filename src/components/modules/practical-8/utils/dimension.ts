import { Dimensions, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export const width = (percentage: number): number => (SCREEN_WIDTH * percentage) / 100
export const height = (percentage: number): number => (SCREEN_HEIGHT * percentage) / 100
export const totalSize = (percentage: number): number =>
    (Math.sqrt(Math.pow(SCREEN_HEIGHT, 2) + Math.pow(SCREEN_WIDTH, 2)) * percentage) / 100

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
