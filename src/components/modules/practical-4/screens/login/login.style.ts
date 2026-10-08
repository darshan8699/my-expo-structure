import { StyleSheet } from 'react-native'
import { Size } from '../../utils/sizes'

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#F6F7FB',
    },
    container: {
        flex: 1,
        backgroundColor: '#F6F7FB',
        padding: Size.FindSize(24),
    },
    headerText: {
        fontSize: Size.FindSize(34),
        color: '#051D3F',
        marginBottom: Size.FindSize(10),
        marginTop: Size.FindSize(40),
    },
    loginText: {
        fontSize: Size.FindSize(14),
        color: '#838E92',
        marginBottom: Size.FindSize(70),
    },
    ForgotPaaswordText: {
        fontSize: Size.FindSize(14),
        color: '#838E92',
        alignSelf: 'flex-end',
        marginTop: Size.FindSize(4),
    },
    CreateAccText: {
        fontSize: Size.FindSize(14),
        color: '#838E92',
    },
    SignupText: {
        fontSize: Size.FindSize(14),
        color: '#C42B42',
    },
    textView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
})

export default styles
