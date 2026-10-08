import { Platform } from 'react-native'

const FontFamily = {
    Bold: Platform.select({ ios: 'Helvetica-Bold', android: 'sans-serif-medium', default: 'System' }),
    Regular: Platform.select({ ios: 'Helvetica', android: 'sans-serif', default: 'System' }),
}

export default FontFamily
