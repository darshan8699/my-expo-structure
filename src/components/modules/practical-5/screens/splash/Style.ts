import { StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import FontFamily from '../../constants/fontFamily'
import { totalSize } from '../../utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Header_color,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.Primary_BackgroundColor,
        fontFamily: FontFamily.Bold,
        fontSize: totalSize(2),
    },
})
