import { StyleSheet } from 'react-native'
import { Size } from '../../utils/sizes'

const styles = StyleSheet.create({
    InnerContainer: {
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
        marginTop: Size.FindSize(20),
    },
    loginText: {
        fontSize: Size.FindSize(14),
        color: '#838E92',
        marginBottom: Size.FindSize(30),
    },
    ForgotPaaswordText: {
        fontSize: Size.FindSize(14),
        color: '#838E92',
        alignSelf: 'flex-end',
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
    image: {
        height: Size.FindSize(18),
        width: Size.FindSize(18),
    },
})

export default styles
