import { StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import FontFamily from '../../constants/fontFamily'
import { height, totalSize } from '../../utils/dimension'

export default StyleSheet.create({
    container: {
        height: height(8),
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Header_color,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    backButton: {
        position: 'absolute',
        left: 16,
        padding: 8,
        zIndex: 2,
    },
    backText: {
        color: Colors.Primary_BackgroundColor,
        fontSize: totalSize(2),
        fontWeight: 'bold',
    },
    nametext: {
        color: Colors.Primary_BackgroundColor,
        fontFamily: FontFamily.Bold,
        fontSize: totalSize(2.2),
        fontWeight: 'bold',
    },
})
