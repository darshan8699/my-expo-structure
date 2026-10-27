import { StyleSheet } from 'react-native'
import { hp, wp } from '../../utils/dimension'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height: hp(10),
        backgroundColor: '#f0a700',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: hp(2),
        paddingBottom: hp(1.5),
    },
    headerBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: hp(2.3),
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: hp(1),
    },
    headerSubtext: {
        fontSize: hp(1.6),
        color: '#ffffff',
    },
    searchSection: {
        height: hp(6),
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: hp(1.5),
        marginTop: hp(1),
        paddingHorizontal: hp(1.5),
        backgroundColor: '#f4f4f4',
        borderRadius: hp(1),
    },
    searchInput: {
        flex: 1,
        fontSize: hp(2),
        color: '#333333',
        marginLeft: hp(1),
    },
    card: {
        paddingHorizontal: hp(1.5),
        paddingVertical: hp(1.5),
        borderBottomWidth: 0.5,
        borderBottomColor: '#dddddd',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        fontSize: hp(2.2),
        fontWeight: 'bold',
        color: '#111111',
    },
    itemCode: {
        fontSize: hp(1.6),
        color: '#f0a700',
        fontWeight: '700',
    },
    itemSubtitle: {
        fontSize: hp(1.5),
        color: '#666666',
        marginTop: hp(0.5),
    },
    expandedCard: {
        backgroundColor: '#fcf8ec',
        padding: hp(1.5),
        marginTop: hp(1),
        borderRadius: hp(0.5),
    },
    quantityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp(0.8),
    },
    quantityLabel: {
        fontSize: hp(1.8),
        fontWeight: '600',
        color: '#333333',
    },
    quantityStats: {
        alignItems: 'flex-end',
    },
    statText: {
        fontSize: hp(1.4),
        color: '#777777',
    },
    counterControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterBtn: {
        backgroundColor: '#ed6503',
        width: hp(4),
        height: hp(4),
        borderRadius: hp(0.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterBtnText: {
        color: '#ffffff',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    counterInput: {
        height: hp(4),
        width: hp(8),
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#ffffff',
        marginHorizontal: hp(1),
        textAlign: 'center',
        fontSize: hp(1.8),
        fontWeight: 'bold',
        borderRadius: hp(0.5),
    },
    bottomBar: {
        height: hp(8),
        backgroundColor: '#f6d379',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottomBarButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBarText: {
        fontSize: hp(1.4),
        color: '#f78b1e',
        fontWeight: 'bold',
        marginTop: hp(0.3),
    },
})
