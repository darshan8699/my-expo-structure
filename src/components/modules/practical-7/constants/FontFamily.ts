import { Platform } from 'react-native'

export const FontFamily = {
    Bold: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    Black: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    BlackItalic: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    BoldItalic: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    ExtraBold: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    ExtraLight: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    ExtraLightItalic: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    Italic: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    Light: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    LightItalic: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
    Regular: Platform.select({ ios: 'System', android: 'Roboto', default: 'System' }),
}

export default FontFamily
