import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { height, totalSize } from '../../utils/dimension'

interface ContainerProps {
    type: string
    name: string
    icon: any
    width?: any
}

export const Container: React.FC<ContainerProps> = ({ type, name, icon, width = '92%' }) => {
    return (
        <View style={[styles.card, { width }]}>
            <View style={styles.row}>
                <View style={styles.iconWrap}>
                    <Entypo name={icon} size={22} color="#4284f4" />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.typeText}>{type}</Text>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#1F1F1F',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 3,
        borderRadius: 10,
        padding: height(1.5),
        backgroundColor: '#ffffff',
        marginVertical: height(1),
        marginHorizontal: height(1),
        borderWidth: 1,
        borderColor: '#f0f3f8',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrap: {
        width: height(5),
        height: height(5),
        borderRadius: height(1),
        backgroundColor: '#edf4fe',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: height(1.5),
    },
    textWrap: {
        flex: 1,
    },
    typeText: {
        fontSize: totalSize(1.3),
        color: '#888888',
        fontWeight: '500',
    },
    nameText: {
        fontSize: totalSize(1.8),
        color: '#1F1F1F',
        fontWeight: 'bold',
        marginTop: 2,
    },
})

export default Container
