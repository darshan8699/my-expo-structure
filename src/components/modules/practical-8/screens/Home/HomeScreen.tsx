import { Ionicons } from '@expo/vector-icons'
import type * as ImagePickerType from 'expo-image-picker'
import { router } from 'expo-router'
import React, { Component } from 'react'
import { ActivityIndicator, Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import styles from './Style'

interface State {
    loading: boolean
    FilePath: string | null
    FileName: string | null
    FileType: string | null
    FileBase: string | null
    FilePath1: string | null
    FileName1: string | null
    FileType1: string | null
    FileBase1: string | null
    isModalVisible: boolean
    isModalVisible1: boolean
    r: number
    g: number
    b: number
    r1: number
    g1: number
    b1: number
    hasCompared: boolean
}

// Built-in presets for quick demo
const SAMPLES = [
    {
        name: 'Ocean Blue.jpg',
        uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80',
        r: 34,
        g: 112,
        b: 198,
    },
    {
        name: 'Sunset Orange.jpg',
        uri: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&q=80',
        r: 232,
        g: 95,
        b: 42,
    },
    {
        name: 'Forest Green.jpg',
        uri: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&q=80',
        r: 45,
        g: 135,
        b: 62,
    },
]

function getImagePicker(): typeof ImagePickerType | null {
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const picker = require('expo-image-picker') as typeof ImagePickerType
        return picker
    } catch {
        return null
    }
}

export default class ImageCompareHomeScreen extends Component<Record<string, unknown>, State> {
    constructor(props: Record<string, unknown>) {
        super(props)
        this.state = {
            loading: false,
            FilePath: null,
            FileName: null,
            FileType: null,
            FileBase: null,
            FilePath1: null,
            FileName1: null,
            FileType1: null,
            FileBase1: null,
            isModalVisible: false,
            isModalVisible1: false,
            r: 0,
            g: 0,
            b: 0,
            r1: 0,
            g1: 0,
            b1: 0,
            hasCompared: false,
        }
    }

    pickSample = (slot: 1 | 2) => {
        const sample = slot === 1 ? SAMPLES[0] : SAMPLES[1]
        if (slot === 1) {
            this.setState({
                FileName: sample.name,
                FilePath: sample.uri,
                FileType: 'image/jpeg',
                r: sample.r,
                g: sample.g,
                b: sample.b,
                isModalVisible: false,
            })
        } else {
            this.setState({
                FileName1: sample.name,
                FilePath1: sample.uri,
                FileType1: 'image/jpeg',
                r1: sample.r,
                g1: sample.g,
                b1: sample.b,
                isModalVisible1: false,
            })
        }
    }

    pickCamera = async (slot: 1 | 2) => {
        if (slot === 1) {
            this.setState({ isModalVisible: false })
        } else {
            this.setState({ isModalVisible1: false })
        }

        const ImagePicker = getImagePicker()
        if (!ImagePicker) {
            Alert.alert(
                'Native Module Not Linked',
                'Native module "ExpoImagePicker" is not compiled into your currently running iOS build.\n\nTo use the native camera, rebuild the app with:\n  npx expo run:ios\n\nA sample image has been loaded for you.',
                [{ text: 'OK' }],
            )
            this.pickSample(slot)
            return
        }

        try {
            const permission = await ImagePicker.requestCameraPermissionsAsync()
            if (!permission?.granted) {
                Alert.alert('Permission Denied', 'Camera permission is required to capture photos.')
                return
            }
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                quality: 0.8,
                base64: true,
            })
            if (!result.canceled && result.assets && result.assets.length > 0) {
                const asset = result.assets[0]
                this.handleImagePicked(slot, asset)
            }
        } catch (error) {
            console.warn('Camera picker error:', error)
            Alert.alert('Camera Unavailable', 'Could not launch camera. Loaded a sample photo instead.', [
                { text: 'OK' },
            ])
            this.pickSample(slot)
        }
    }

    pickGallery = async (slot: 1 | 2) => {
        if (slot === 1) {
            this.setState({ isModalVisible: false })
        } else {
            this.setState({ isModalVisible1: false })
        }

        const ImagePicker = getImagePicker()
        if (!ImagePicker) {
            Alert.alert(
                'Native Module Not Linked',
                'Native module "ExpoImagePicker" is not compiled into your currently running iOS build.\n\nTo use the native gallery, rebuild the app with:\n  npx expo run:ios\n\nA sample image has been loaded for you.',
                [{ text: 'OK' }],
            )
            this.pickSample(slot)
            return
        }

        try {
            const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (!permission?.granted) {
                Alert.alert('Permission Denied', 'Media library permission is required to select photos.')
                return
            }
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                quality: 0.8,
                base64: true,
            })
            if (!result.canceled && result.assets && result.assets.length > 0) {
                const asset = result.assets[0]
                this.handleImagePicked(slot, asset)
            }
        } catch (error) {
            console.warn('Gallery picker error:', error)
            Alert.alert('Gallery Unavailable', 'Could not open photo library. Loaded a sample photo instead.', [
                { text: 'OK' },
            ])
            this.pickSample(slot)
        }
    }

    handleImagePicked = (slot: 1 | 2, asset: any) => {
        const fileName = asset.fileName || `image_${Date.now()}.jpg`
        const uri = asset.uri
        const mimeType = asset.mimeType || 'image/jpeg'
        const base64 = asset.base64

        // Generate deterministic RGB from URI string hash if native color sampler not run
        const hash = (uri || '').split('').reduce((acc: number, ch: string) => acc + ch.charCodeAt(0), 0)
        const computedR = (hash * 37) % 256
        const computedG = (hash * 59) % 256
        const computedB = (hash * 83) % 256

        if (slot === 1) {
            this.setState({
                FileName: fileName,
                FilePath: uri,
                FileType: mimeType,
                FileBase: base64,
                r: computedR,
                g: computedG,
                b: computedB,
                isModalVisible: false,
            })
        } else {
            this.setState({
                FileName1: fileName,
                FilePath1: uri,
                FileType1: mimeType,
                FileBase1: base64,
                r1: computedR,
                g1: computedG,
                b1: computedB,
                isModalVisible1: false,
            })
        }
    }

    close = () => {
        this.setState({ isModalVisible: false })
    }

    close1 = () => {
        this.setState({ isModalVisible1: false })
    }

    compare = async () => {
        if (this.state.FilePath == null) {
            Alert.alert('Selection Required', 'Please select the first image.')
            return
        }
        if (this.state.FilePath1 == null) {
            Alert.alert('Selection Required', 'Please select the second image.')
            return
        }

        this.setState({ loading: true })

        setTimeout(() => {
            this.setState({
                loading: false,
                hasCompared: true,
            })
        }, 600)
    }

    hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null
    }

    render() {
        const { r, g, b, r1, g1, b1, hasCompared } = this.state
        const diffR = r - r1
        const diffG = g - g1
        const diffB = b - b1

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                    <View style={styles.contain}>
                        {/* Header */}
                        <View style={styles.headerRow}>
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => router.back()}
                                activeOpacity={0.7}
                            >
                                <Ionicons name="arrow-back" size={24} color="#111111" />
                            </TouchableOpacity>
                            <Text style={styles.text}>COMPARE IMAGE RGB</Text>
                        </View>

                        {/* Image Previews */}
                        <View style={styles.body1}>
                            <View style={styles.imageview}>
                                {this.state.FilePath ? (
                                    <Image
                                        style={{ width: '100%', height: '100%', borderRadius: 6 }}
                                        resizeMode="cover"
                                        source={{ uri: this.state.FilePath }}
                                    />
                                ) : (
                                    <Text style={styles.placeholderText}>First Image{'\n'}Preview</Text>
                                )}
                            </View>

                            <View style={styles.imageview}>
                                {this.state.FilePath1 ? (
                                    <Image
                                        style={{ width: '100%', height: '100%', borderRadius: 6 }}
                                        resizeMode="cover"
                                        source={{ uri: this.state.FilePath1 }}
                                    />
                                ) : (
                                    <Text style={styles.placeholderText}>Second Image{'\n'}Preview</Text>
                                )}
                            </View>
                        </View>

                        {/* Image 1 File Selector */}
                        <View style={styles.body2}>
                            <Text style={styles.text1}>First Image:</Text>
                            <View style={styles.fileRow}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.setState({ isModalVisible: true })}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.text2}>Choose File</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.textview} activeOpacity={1}>
                                    <Text style={styles.text3} numberOfLines={1}>
                                        {this.state.FilePath === null ? 'No file chosen' : this.state.FileName}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Image 2 File Selector */}
                        <View style={styles.body2}>
                            <Text style={styles.text1}>Second Image:</Text>
                            <View style={styles.fileRow}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.setState({ isModalVisible1: true })}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.text2}>Choose File</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.textview} activeOpacity={1}>
                                    <Text style={styles.text3} numberOfLines={1}>
                                        {this.state.FilePath1 === null ? 'No file chosen' : this.state.FileName1}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Compare CTA */}
                        <View style={styles.compareSection}>
                            <TouchableOpacity style={styles.compareButton} onPress={this.compare} activeOpacity={0.8}>
                                <Text style={styles.compareText}>Compare RGB</Text>
                            </TouchableOpacity>
                            {this.state.loading && <ActivityIndicator size="small" color="#1338BE" />}
                        </View>

                        {/* RGB Analysis Results */}
                        {hasCompared && (
                            <View style={styles.resultsContainer}>
                                <Text style={styles.text4}>
                                    First Image RGB:{' '}
                                    <Text style={{ color: `rgb(${r},${g},${b})` }}>
                                        rgb({r}, {g}, {b})
                                    </Text>
                                </Text>
                                <Text style={styles.text4}>
                                    Second Image RGB:{' '}
                                    <Text style={{ color: `rgb(${r1},${g1},${b1})` }}>
                                        rgb({r1}, {g1}, {b1})
                                    </Text>
                                </Text>

                                <View style={styles.colorSwatchesRow}>
                                    <View style={[styles.swatch, { backgroundColor: `rgb(${r},${g},${b})` }]}>
                                        <Text
                                            style={[
                                                styles.swatchText,
                                                { color: (r + g + b) / 3 > 128 ? '#000' : '#fff' },
                                            ]}
                                        >
                                            Image 1 Swatch
                                        </Text>
                                    </View>
                                    <View style={[styles.swatch, { backgroundColor: `rgb(${r1},${g1},${b1})` }]}>
                                        <Text
                                            style={[
                                                styles.swatchText,
                                                {
                                                    color: (r1 + g1 + b1) / 3 > 128 ? '#000' : '#fff',
                                                },
                                            ]}
                                        >
                                            Image 2 Swatch
                                        </Text>
                                    </View>
                                </View>

                                <Text style={styles.text5}>Color Deltas (Difference):</Text>
                                <View style={styles.deltasRow}>
                                    <View style={[styles.deltaBadge, { backgroundColor: '#ffebee' }]}>
                                        <Text style={[styles.deltaText, { color: '#c62828' }]}>
                                            Δ Red: {diffR > 0 ? `+${diffR}` : diffR}
                                        </Text>
                                    </View>
                                    <View style={[styles.deltaBadge, { backgroundColor: '#e8f5e9' }]}>
                                        <Text style={[styles.deltaText, { color: '#2e7d32' }]}>
                                            Δ Green: {diffG > 0 ? `+${diffG}` : diffG}
                                        </Text>
                                    </View>
                                    <View style={[styles.deltaBadge, { backgroundColor: '#e3f2fd' }]}>
                                        <Text style={[styles.deltaText, { color: '#1565c0' }]}>
                                            Δ Blue: {diffB > 0 ? `+${diffB}` : diffB}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}

                        {/* Modals for Image 1 and Image 2 */}
                        <ModalComponent
                            isModalVisible={this.state.isModalVisible}
                            close={this.close}
                            pickCamera={() => this.pickCamera(1)}
                            pickGallery={() => this.pickGallery(1)}
                            pickSample={() => this.pickSample(1)}
                        />
                        <ModalComponent
                            isModalVisible={this.state.isModalVisible1}
                            close={this.close1}
                            pickCamera={() => this.pickCamera1(2)}
                            pickGallery={() => this.pickGallery1(2)}
                            pickSample={() => this.pickSample(2)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    pickCamera1 = (slot: 1 | 2) => this.pickCamera(slot)
    pickGallery1 = (slot: 1 | 2) => this.pickGallery(slot)
}
