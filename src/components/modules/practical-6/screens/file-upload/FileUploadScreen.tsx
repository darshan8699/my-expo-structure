import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { hp } from '../../utils/dimension'

export default function FileUploadScreen() {
    const [fileName, setFileName] = useState<string | null>(null)
    const [uploading, setUploading] = useState(false)

    const handleSelectFile = () => {
        setFileName('inventory_batch_2026.csv')
    }

    const handleUpload = () => {
        if (!fileName) {
            Alert.alert('No file selected', 'Please choose a file to upload first.')
            return
        }
        setUploading(true)
        setTimeout(() => {
            setUploading(false)
            Alert.alert('Uploaded', `File "${fileName}" was successfully uploaded.`)
        }, 1200)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>File Upload</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.uploadBox}>
                    <Ionicons name="cloud-upload-outline" size={54} color="#f0a700" />
                    <Text style={styles.boxTitle}>Upload Catalog File</Text>
                    <Text style={styles.boxSubtitle}>Supported formats: .CSV, .JSON, .XLSX</Text>

                    <TouchableOpacity style={styles.selectBtn} onPress={handleSelectFile}>
                        <Text style={styles.selectBtnText}>{fileName ? `Selected: ${fileName}` : 'Choose File'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.uploadBtn, !fileName && styles.disabledBtn]}
                    onPress={handleUpload}
                    disabled={uploading}
                >
                    <Text style={styles.uploadBtnText}>{uploading ? 'UPLOADING...' : 'START UPLOAD'}</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadBox: {
        width: '100%',
        paddingVertical: hp(5),
        borderWidth: 2,
        borderColor: '#f0a700',
        borderStyle: 'dashed',
        borderRadius: hp(1.5),
        alignItems: 'center',
        backgroundColor: '#fffdf6',
    },
    boxTitle: {
        fontSize: hp(2.2),
        fontWeight: 'bold',
        color: '#333333',
        marginTop: hp(1.5),
    },
    boxSubtitle: {
        fontSize: hp(1.5),
        color: '#777777',
        marginTop: hp(0.5),
    },
    selectBtn: {
        backgroundColor: '#f0a700',
        paddingHorizontal: hp(3),
        paddingVertical: hp(1.2),
        borderRadius: hp(0.8),
        marginTop: hp(2.5),
    },
    selectBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: hp(1.6),
    },
    uploadBtn: {
        backgroundColor: '#ed6503',
        width: '100%',
        paddingVertical: hp(1.8),
        borderRadius: hp(1),
        alignItems: 'center',
        marginTop: hp(3),
    },
    disabledBtn: {
        opacity: 0.5,
    },
    uploadBtnText: {
        color: '#ffffff',
        fontSize: hp(1.8),
        fontWeight: 'bold',
    },
})
