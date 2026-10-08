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
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: height(2),
        marginVertical: height(1),
    },
    button: {
        backgroundColor: Colors.Header_color,
        paddingVertical: height(1),
        paddingHorizontal: height(2),
        borderRadius: height(3),
    },
    secondaryButton: {
        backgroundColor: '#4B5563',
        paddingVertical: height(1),
        paddingHorizontal: height(1.5),
        borderRadius: height(3),
        marginRight: 8,
    },
    buttontext: {
        color: Colors.Primary_BackgroundColor,
        fontWeight: 'bold',
        fontSize: 13,
    },
})
