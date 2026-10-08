import axios from 'axios'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonComponent, TextComponent, TextInputComponent } from '../../components'
import styles from './login.style'

const LOGIN_URL = 'https://aavatto.com/test/fairshop/api-server/public/api/login'

const LoginScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const SignIn = async () => {
        if (!email || email.trim() === '') {
            Alert.alert('Please enter email or phone')
            return
        }
        if (!password || password.trim() === '') {
            Alert.alert('Please enter password')
            return
        }

        setLoading(true)
        try {
            const response = await axios.post(
                LOGIN_URL,
                {
                    login: email,
                    password: password,
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            )

            if (response.data.success === true) {
                Alert.alert(response.data.message || 'Login successful')
            } else {
                Alert.alert('Please check login credentials')
            }
        } catch {
            Alert.alert('Please check login credentials')
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.container}>
                <TextComponent name="Welcome !" style={styles.headerText} />
                <TextComponent name="Login to continue" style={styles.loginText} />
                <TextInputComponent
                    placeHolder="Email or Phone"
                    LeftIcon="user-alt"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInputComponent
                    placeHolder="Password"
                    LeftIcon="key"
                    RightIcon={showPassword ? 'eye-slash' : 'eye'}
                    secureTextEntry={showPassword}
                    value={password}
                    onRightButtonPress={() => setShowPassword(!showPassword)}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextComponent name="Forgot Pasword?" style={styles.ForgotPaaswordText} />
                <ButtonComponent text="Sign In" loading={loading} onPress={SignIn} />
                <View style={styles.textView}>
                    <TextComponent name="Don’t have an account?" style={styles.CreateAccText} />
                    <TextComponent
                        name=" Sign Up"
                        style={styles.SignupText}
                        onPress={() => router.push('/practical-4/registration')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen
