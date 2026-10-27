import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { height, totalSize } from '../../utils/dimension'

interface CustomeHeaderProps {
    heading?: string
    onBack?: () => void
}

export const CustomeHeader: React.FC<CustomeHeaderProps> = ({ heading = '', onBack }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={onBack || (() => router.back())} activeOpacity={0.7}>
                <AntDesign name="left" size={20} color="#1F1F1F" />
            </TouchableOpacity>

            <View style={styles.titleWrap}>
                <Text style={styles.title}>{heading}</Text>
            </View>

            <TouchableOpacity style={styles.menuBtn} activeOpacity={0.7}>
                <AntDesign name="menu-fold" size={20} color="#1F1F1F" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: height(2),
        paddingVertical: height(1),
        width: '100%',
    },
    backBtn: {
        width: height(5),
        height: height(5),
        borderRadius: height(2.5),
        backgroundColor: '#f5f7fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: totalSize(2),
        fontWeight: 'bold',
        color: '#1F1F1F',
    },
    menuBtn: {
        width: height(5),
        height: height(5),
        borderRadius: height(2.5),
        backgroundColor: '#f5f7fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CustomeHeader
