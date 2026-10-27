import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { height, totalSize } from '../../utils/dimension'

interface FilterProps {
    name: string
    icon: any
    active?: boolean
    onPress?: () => void
}

export const Filter: React.FC<FilterProps> = ({ name, icon, active = false, onPress }) => {
    return (
        <TouchableOpacity style={[styles.filter, active && styles.filterActive]} onPress={onPress} activeOpacity={0.8}>
            <AntDesign name={icon} size={16} color={active ? '#ffffff' : '#4284f4'} />
            <Text style={[styles.text, active && styles.textActive]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#4284f4',
        borderRadius: height(2),
        marginLeft: height(1.5),
        paddingHorizontal: height(1.8),
        paddingVertical: height(0.8),
        marginTop: height(1.5),
        backgroundColor: '#ffffff',
    },
    filterActive: {
        backgroundColor: '#4284f4',
    },
    text: {
        marginLeft: height(0.8),
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: '#4284f4',
    },
    textActive: {
        color: '#ffffff',
    },
})

export default Filter
