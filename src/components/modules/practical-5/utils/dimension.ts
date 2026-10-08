import { Dimensions } from 'react-native'

export const width = (percentage: number): number => {
    const { width: screenWidth } = Dimensions.get('window')
    return (screenWidth * percentage) / 100
}

export const height = (percentage: number): number => {
    const { height: screenHeight } = Dimensions.get('window')
    return (screenHeight * percentage) / 100
}

export const totalSize = (percentage: number): number => {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    return (Math.sqrt(Math.pow(screenHeight, 2) + Math.pow(screenWidth, 2)) * percentage) / 100
}
