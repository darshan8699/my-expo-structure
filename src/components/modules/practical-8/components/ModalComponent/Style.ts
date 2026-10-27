import { StyleSheet } from 'react-native'
import { hp, wp } from '../../utils/dimension'

export default StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalview: {
        height: hp(28),
        width: wp(70),
        backgroundColor: '#ffffff',
        padding: hp(2),
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
    modalbutton: {
        width: '75%',
        paddingVertical: hp(1.2),
        backgroundColor: '#111111',
        marginTop: hp(1.5),
        borderRadius: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    modaltext: {
        fontSize: hp(2),
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: hp(0.8),
    },
    closebutton: {
        right: 12,
        top: 12,
        position: 'absolute',
        padding: 4,
    },
})
