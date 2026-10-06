import { StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import FontFamily from '../../constants/fontFamily'
import { height, totalSize } from '../../utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Header_color,
    },
    contain: {
        flex: 1,
        backgroundColor: Colors.Primary_BackgroundColor,
    },
    box: {
        backgroundColor: Colors.Primary_BackgroundColor,
        margin: height(2),
        padding: height(2),
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    nametext: {
        color: Colors.Header_color,
        fontFamily: FontFamily.Bold,
        fontSize: totalSize(1.8),
        fontWeight: '600',
        paddingVertical: height(0.6),
    },
})
