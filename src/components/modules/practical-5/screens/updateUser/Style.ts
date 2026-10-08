import { StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import { height } from '../../utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Header_color,
    },
    contain: {
        flex: 1,
        backgroundColor: Colors.Primary_BackgroundColor,
    },
    button: {
        marginTop: height(4),
        marginBottom: height(4),
        paddingHorizontal: height(8),
        paddingVertical: height(1.8),
        backgroundColor: Colors.Header_color,
        borderRadius: height(2),
        alignSelf: 'center',
    },
    buttontext: {
        color: Colors.Primary_BackgroundColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
})
