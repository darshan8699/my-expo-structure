import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontFamily from '../../constants/FontFamily'
import { height, totalSize, width } from '../../utils/dimension'

interface BoxProps {
    title?: string
    distance?: string
    imageSource?: any
}

export const Box: React.FC<BoxProps> = ({
    title = 'New York city skyline',
    distance = 'Distance to 2.999 mi',
    imageSource = require('@/assets/images/practical-7/newyork.jpg'),
}) => {
    return (
        <View style={styles.card}>
            <Image source={imageSource} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.distance}>{distance}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#1F1F1F',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
        borderRadius: 12,
        padding: height(1.2),
        width: width(45),
        backgroundColor: '#ffffff',
        margin: height(1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width(40),
        height: height(20),
        borderRadius: height(2),
    },
    title: {
        fontFamily: FontFamily.Bold,
        fontWeight: 'bold',
        fontSize: totalSize(1.8),
        marginTop: height(1),
        textAlign: 'center',
        color: '#111111',
    },
    distance: {
        fontSize: totalSize(1.4),
        color: '#777777',
        marginTop: height(0.4),
    },
})

export default Box
