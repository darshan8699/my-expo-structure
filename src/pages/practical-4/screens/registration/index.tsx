import axios from 'axios'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonComponent, TextComponent, TextInputComponent } from '../../components'
import styles from './registration.style'

const REGISTER_URL = 'https://aavatto.com/test/fairshop/api-server/public/api/users'
const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const RegistrationScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [loading, setLoading] = useState(false)

    const Signup = async () => {
        if (!firstname || firstname.trim() === '') {
            Alert.alert('Please enter first name')
            return
        }
        if (!lastname || lastname.trim() === '') {
            Alert.alert('Please enter last name')
            return
        }
        if (!phone || phone.trim() === '') {
            Alert.alert('Please enter phone no')
            return
        }
        if (!email || email.trim() === '') {
            Alert.alert('Please enter email id')
            return
        }
        if (!EMAIL_REGEX.test(email)) {
            Alert.alert('Please enter valid email id')
            return
        }
        if (!password || password.trim() === '') {
            Alert.alert('Please enter password')
            return
        }

        setLoading(true)
        try {
            const response = await axios.post(
                REGISTER_URL,
                {
                    email,
                    password,
                    phone,
                    first_name: firstname,
                    last_name: lastname,
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            )

            if (response.data.success === true) {
                Alert.alert(response.data.message || 'Registration successful')
            } else {
                Alert.alert(response?.data?.message || 'Registration failed')
            }
        } catch (error: any) {
            Alert.alert(error?.response?.data?.message || String(error?.message || error))
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.InnerContainer}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.InnerContainer}
                >
                    <ScrollView
                        style={styles.InnerContainer}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        <TouchableOpacity onPress={() => router.back()}>
                            <Image
                                source={require('../../assets/Arrow.png')}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TextComponent name="Sign Up" style={styles.headerText} />
                        <TextComponent
                            name="From delicious meals to the freshest fruits & vegetables, quality living starts here!"
                            style={styles.loginText}
                        />

                        <TextInputComponent
                            placeHolder="First Name"
                            LeftIcon="user-alt"
                            value={firstname}
                            onChangeText={(text) => setFirstname(text)}
                        />
                        <TextInputComponent
                            placeHolder="Last Name"
                            LeftIcon="user-alt"
                            value={lastname}
                            onChangeText={(text) => setLastname(text)}
                        />
                        <TextInputComponent
                            placeHolder="Phone"
                            LeftIcon="call"
                            MaterialIcons
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            keyboardType="numeric"
                        />
                        <TextInputComponent
                            placeHolder="Email address"
                            LeftIcon="email"
                            MaterialIcons
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

                        <ButtonComponent text="Sign Up" loading={loading} onPress={Signup} />

                        <View style={styles.textView}>
                            <TextComponent name="Already have an account?" style={styles.CreateAccText} />
                            <TextComponent name=" Log In" style={styles.SignupText} onPress={() => router.back()} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default RegistrationScreen
