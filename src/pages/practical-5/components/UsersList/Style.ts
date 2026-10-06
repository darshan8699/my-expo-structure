import { StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import FontFamily from '../../constants/fontFamily'
import { height, totalSize } from '../../utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary_BackgroundColor,
        marginHorizontal: height(2),
        marginVertical: height(1),
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
        fontSize: totalSize(1.6),
        fontWeight: '600',
        paddingVertical: height(0.4),
    },
    rowstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(1),
        gap: 8,
    },
    button: {
        flex: 1,
        paddingVertical: height(1),
        paddingHorizontal: 8,
        backgroundColor: Colors.Header_color,
        borderRadius: height(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        color: Colors.Primary_BackgroundColor,
        fontSize: totalSize(1.3),
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
