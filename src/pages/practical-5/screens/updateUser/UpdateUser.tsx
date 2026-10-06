import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Spinner, TextInputComp } from '../../components'
import Colors from '../../constants/colors'
import * as API from '../../services/api'
import Style from './Style'

const { container, contain, button, buttontext } = Style

const UpdateUser: React.FC = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [name, setName] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [phoneno, setPhoneno] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [company, setCompany] = useState<string | null>(null)

    const [invalidname, setinvalidName] = useState<boolean | null>(null)
    const [invalidusername, setinvalidUsername] = useState<boolean | null>(null)
    const [invalidemail, setinvalidEmail] = useState<boolean | null>(null)
    const [invalidphoneno, setinvalidPhoneno] = useState<boolean | null>(null)
    const [invalidwebsite, setinvalidWebsite] = useState<boolean | null>(null)

    const [invalidnametext, setinvalidNametext] = useState<string | null>(null)
    const [invalidusernametext, setinvalidUsernametext] = useState<string | null>(null)
    const [invalidemailtext, setinvalidEmailtext] = useState<string | null>(null)
    const [invalidphonenotext, setinvalidPhonenotext] = useState<string | null>(null)
    const [invalidwebsitetext, setinvalidWebsitetext] = useState<string | null>(null)

    const usernamevalid = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]+/
    const emailvalid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/

    useEffect(() => {
        if (!id) return
        API.singleUserAPI(id)
            .then((response) => {
                if (response?.data) {
                    setName(response.data.name)
                    setUsername(response.data.username)
                    setEmail(response.data.email)
                    setPhoneno(response.data.phone)
                    setWebsite(response.data.website ?? null)
                    const compName =
                        typeof response.data.company === 'string'
                            ? response.data.company
                            : (response.data.company?.name ?? null)
                    setCompany(compName)
                }
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [id])

    function validURL(str: string): boolean {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$',
            'i',
        )
        return pattern.test(str)
    }

    const onSubmit = () => {
        let hasError = false

        if (!name || name.trim() === '') {
            setinvalidNametext('Please enter name')
            setinvalidName(true)
            hasError = true
        } else {
            setinvalidName(false)
        }

        if (!username || username.trim() === '') {
            setinvalidUsernametext('Please enter username')
            setinvalidUsername(true)
            hasError = true
        } else if (usernamevalid.test(username)) {
            setinvalidUsernametext('Do not accept special characters and white spaces')
            setinvalidUsername(true)
            hasError = true
        } else {
            setinvalidUsername(false)
        }

        if (!email || email.trim() === '') {
            setinvalidEmailtext('Please enter email')
            setinvalidEmail(true)
            hasError = true
        } else if (!emailvalid.test(email)) {
            setinvalidEmailtext('Must be valid Email')
            setinvalidEmail(true)
            hasError = true
        } else {
            setinvalidEmail(false)
        }

        if (!phoneno || phoneno.trim() === '') {
            setinvalidPhonenotext('Please enter phone no')
            setinvalidPhoneno(true)
            hasError = true
        } else if (phoneno.trim().length < 10) {
            setinvalidPhonenotext('Accept only 10 digits')
            setinvalidPhoneno(true)
            hasError = true
        } else {
            setinvalidPhoneno(false)
        }

        if (website && website.trim() !== '') {
            if (!validURL(website)) {
                setinvalidWebsitetext('Must be a valid URL')
                setinvalidWebsite(true)
                hasError = true
            } else {
                setinvalidWebsite(false)
            }
        } else {
            setinvalidWebsite(false)
        }

        if (!hasError && id) {
            setSubmitting(true)
            const data = {
                name: name!,
                username: username!,
                email: email!,
                phone: phoneno!,
                website: website || null,
                company: company ? { name: company } : null,
            }

            API.updateuserAPI(data, id)
                .then((response) => {
                    setSubmitting(false)
                    if (response?.data) {
                        Alert.alert('Success', 'User updated successfully', [
                            { text: 'OK', onPress: () => router.back() },
                        ])
                    } else {
                        Alert.alert('Error', 'Failed to update user')
                    }
                })
                .catch(() => {
                    setSubmitting(false)
                    Alert.alert('Error', 'Failed to update user')
                })
        }
    }

    return (
        <SafeAreaView style={container}>
            <StatusBar backgroundColor={Colors.Header_color} barStyle="light-content" />
            <View style={contain}>
                <Header text="Update User" onBack={() => router.back()} />
                {loading ? (
                    <Spinner
                        visible={loading}
                        textContent="Loading User..."
                        textStyle={{ color: Colors.Primary_BackgroundColor }}
                    />
                ) : (
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                            <TextInputComp
                                placeholder="Enter Name"
                                value={name}
                                onChangeText={(text) => setName(text)}
                                KeyBoardType="default"
                                invalid={invalidname}
                                validationtext={invalidnametext}
                            />
                            <TextInputComp
                                placeholder="Enter Username"
                                value={username}
                                onChangeText={(text) => setUsername(text)}
                                KeyBoardType="default"
                                invalid={invalidusername}
                                validationtext={invalidusernametext}
                            />
                            <TextInputComp
                                placeholder="Enter Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                KeyBoardType="email-address"
                                invalid={invalidemail}
                                validationtext={invalidemailtext}
                            />
                            <TextInputComp
                                placeholder="Enter Phone"
                                value={phoneno}
                                onChangeText={(text) => setPhoneno(text)}
                                KeyBoardType="numeric"
                                invalid={invalidphoneno}
                                validationtext={invalidphonenotext}
                            />
                            <TextInputComp
                                placeholder="Enter Web-site (Optional)"
                                value={website}
                                onChangeText={(text) => setWebsite(text)}
                                KeyBoardType="default"
                                invalid={invalidwebsite}
                                validationtext={invalidwebsitetext}
                            />
                            <TextInputComp
                                placeholder="Enter Company Name (Optional)"
                                value={company}
                                onChangeText={(text) => setCompany(text)}
                                KeyBoardType="default"
                            />
                            <TouchableOpacity onPress={onSubmit} style={button} activeOpacity={0.8}>
                                <Text style={buttontext}>Update</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
                )}

                <Spinner
                    visible={submitting}
                    textContent="Updating User..."
                    textStyle={{ color: Colors.Primary_BackgroundColor }}
                />
            </View>
        </SafeAreaView>
    )
}

export default UpdateUser
