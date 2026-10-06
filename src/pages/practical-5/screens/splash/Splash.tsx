import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Spinner } from '../../components'
import Colors from '../../constants/colors'
import Style from './Style'

const { container } = Style

const Splash: React.FC = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/practical-5')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <SafeAreaView style={container}>
            <StatusBar backgroundColor={Colors.Header_color} barStyle="light-content" />
            <View style={container}>
                <Spinner
                    visible={true}
                    textContent="Loading..."
                    textStyle={{ color: Colors.Primary_BackgroundColor }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Splash
