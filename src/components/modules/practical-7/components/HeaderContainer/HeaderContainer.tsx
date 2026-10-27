import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontFamily from '../../constants/FontFamily'
import { height, totalSize } from '../../utils/dimension'

interface HeaderContainerProps {
    heading: string
    onViewAll?: () => void
}

export const HeaderContainer: React.FC<HeaderContainerProps> = ({ heading, onViewAll }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <TouchableOpacity onPress={onViewAll} activeOpacity={0.7}>
                <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: height(2),
        marginBottom: height(1),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: height(2),
    },
    heading: {
        fontFamily: FontFamily.Bold,
        fontSize: totalSize(2.2),
        fontWeight: 'bold',
        color: '#1F1F1F',
    },
    viewAll: {
        fontSize: totalSize(1.6),
        color: '#4284f4',
        fontWeight: '600',
    },
})

export default HeaderContainer
