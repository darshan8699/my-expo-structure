import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { height, width } from '../../utils/dimension'

interface OptionsProps {
    name: any
    color: string
    gotoFlight?: () => void
}

export const Options: React.FC<OptionsProps> = ({ name, color, gotoFlight }) => {
    return (
        <TouchableOpacity onPress={gotoFlight} activeOpacity={0.8}>
            <View style={[styles.box, { backgroundColor: color }]}>
                <Entypo name={name} size={24} color="#ffffff" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        marginTop: height(1.5),
        height: height(7.5),
        width: width(16),
        borderRadius: height(1.8),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
})

export default Options
