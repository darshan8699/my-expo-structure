import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { hp } from '../../utils/dimension'

export default function ApiTestScreen() {
    const [name, setName] = useState('divya')
    const [email, setEmail] = useState('divyajariwala610@gmail.com')
    const [id, setId] = useState('dsad3d23d32')
    const [loading, setLoading] = useState(false)
    const [responseLog, setResponseLog] = useState<string | null>(null)

    const handleApiCall = async () => {
        setLoading(true)
        setResponseLog(null)
        try {
            const res = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    username: name,
                    email: email,
                    google_auth: id,
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    timeout: 8000,
                },
            )
            const resultStr = JSON.stringify(res.data, null, 2)
            setResponseLog(resultStr)
            Alert.alert('Success', `API Response (Status ${res.status}):\n${resultStr}`)
        } catch (err: any) {
            const errStr = err.message || JSON.stringify(err)
            setResponseLog(`Error: ${errStr}`)
            Alert.alert('Error', errStr)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>API Test</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Name / Username:</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter name" />

                <Text style={styles.label}>Email Address:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter email"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Auth ID / Token:</Text>
                <TextInput style={styles.input} value={id} onChangeText={setId} placeholder="Enter auth token / ID" />

                <TouchableOpacity style={styles.button} onPress={handleApiCall} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color="#ffffff" />
                    ) : (
                        <Text style={styles.buttonText}>PRESS ME / SEND REQUEST</Text>
                    )}
                </TouchableOpacity>

                {responseLog && (
                    <View style={styles.logContainer}>
                        <Text style={styles.logTitle}>Response Output:</Text>
                        <Text style={styles.logText}>{responseLog}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height: hp(8),
        backgroundColor: '#f0a700',
        justifyContent: 'center',
        paddingHorizontal: hp(2),
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: hp(2.2),
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: hp(1),
    },
    content: {
        flex: 1,
        padding: hp(2.5),
    },
    label: {
        fontSize: hp(1.8),
        fontWeight: '600',
        color: '#333333',
        marginTop: hp(1.5),
        marginBottom: hp(0.5),
    },
    input: {
        height: hp(5.5),
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: hp(0.8),
        paddingHorizontal: hp(1.5),
        fontSize: hp(1.8),
        backgroundColor: '#fafafa',
    },
    button: {
        backgroundColor: '#f0a700',
        paddingVertical: hp(1.8),
        borderRadius: hp(1),
        alignItems: 'center',
        marginTop: hp(3),
    },
    buttonText: {
        color: '#ffffff',
        fontSize: hp(1.8),
        fontWeight: 'bold',
    },
    logContainer: {
        marginTop: hp(3),
        padding: hp(1.5),
        backgroundColor: '#f3f4f6',
        borderRadius: hp(0.8),
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    logTitle: {
        fontSize: hp(1.6),
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: hp(0.5),
    },
    logText: {
        fontFamily: 'monospace',
        fontSize: hp(1.4),
        color: '#374151',
    },
})
