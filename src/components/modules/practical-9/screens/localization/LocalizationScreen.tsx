import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface LangItem {
    shortform: string
    longform: string
    greeting: string
    welcome: string
}

const LANGUAGES: LangItem[] = [
    {
        shortform: 'en',
        longform: 'English',
        greeting: 'Hello & Welcome!',
        welcome: 'Live tracking coordinates and route updates are ready.',
    },
    {
        shortform: 'hi',
        longform: 'Hindi (हिन्दी)',
        greeting: 'नमस्ते और स्वागत है!',
        welcome: 'लाइव ट्रैकिंग निर्देशांक और मार्ग अपडेट तैयार हैं।',
    },
    {
        shortform: 'ma',
        longform: 'Marathi (मराठी)',
        greeting: 'नमस्कार आणि स्वागत आहे!',
        welcome: 'थेट ट्रॅकिंग समन्वय आणि मार्ग अद्यतने तयार आहेत.',
    },
    {
        shortform: 'fr',
        longform: 'French (Français)',
        greeting: 'Bonjour et bienvenue!',
        welcome: 'Les coordonnées de suivi en direct et les itinéraires sont prêts.',
    },
]

export default function LocalizationScreen() {
    const [selectedLang, setSelectedLang] = useState<LangItem>(LANGUAGES[0])

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Localization Demo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.previewBox}>
                    <Text style={styles.greeting}>{selectedLang.greeting}</Text>
                    <Text style={styles.welcome}>{selectedLang.welcome}</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            Selected: {selectedLang.longform} ({selectedLang.shortform})
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Select Preferred Language:</Text>

                <View style={styles.langList}>
                    {LANGUAGES.map((item) => {
                        const isSelected = selectedLang.shortform === item.shortform
                        return (
                            <TouchableOpacity
                                key={item.shortform}
                                style={[styles.langItem, isSelected && styles.langItemActive]}
                                onPress={() => setSelectedLang(item)}
                                activeOpacity={0.8}
                            >
                                <View style={styles.langItemLeft}>
                                    <View style={[styles.codeCircle, isSelected && styles.codeCircleActive]}>
                                        <Text style={[styles.codeText, isSelected && styles.codeTextActive]}>
                                            {item.shortform.toUpperCase()}
                                        </Text>
                                    </View>
                                    <Text style={[styles.langName, isSelected && styles.langNameActive]}>
                                        {item.longform}
                                    </Text>
                                </View>

                                {isSelected && <Ionicons name="checkmark-circle" size={22} color="#1bce8d" />}
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 8,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    previewBox: {
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        marginBottom: 28,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.12)',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    welcome: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 22,
    },
    badge: {
        backgroundColor: '#1bce8d',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 12,
        marginTop: 16,
    },
    badgeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 14,
    },
    langList: {
        gap: 10,
    },
    langItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.06)',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    langItemActive: {
        backgroundColor: 'rgba(27, 206, 141, 0.15)',
        borderColor: '#1bce8d',
    },
    langItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    codeCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    codeCircleActive: {
        backgroundColor: '#1bce8d',
    },
    codeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    codeTextActive: {
        color: '#ffffff',
    },
    langName: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
    },
    langNameActive: {
        fontWeight: 'bold',
        color: '#1bce8d',
    },
})
