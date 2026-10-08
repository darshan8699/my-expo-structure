import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Spinner } from '../../components'
import Colors from '../../constants/colors'
import * as API from '../../services/api'
import { UserItem } from '../../services/api'
import Style from './Style'

const { container, contain, box, nametext } = Style

const SingleUser: React.FC = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<UserItem | null>(null)

    useEffect(() => {
        if (!id) return
        API.singleUserAPI(id)
            .then((response) => {
                if (response?.data) {
                    setData(response.data)
                }
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [id])

    const companyName = typeof data?.company === 'string' ? data.company : data?.company?.name || 'N/A'

    return (
        <SafeAreaView style={container}>
            <StatusBar backgroundColor={Colors.Header_color} barStyle="light-content" />
            <View style={contain}>
                <Header text="User Details" onBack={() => router.back()} />
                {loading ? (
                    <Spinner
                        visible={loading}
                        textContent="Loading User Details..."
                        textStyle={{ color: Colors.Primary_BackgroundColor }}
                    />
                ) : data ? (
                    <View style={box}>
                        <Text style={nametext}>Name: {data.name}</Text>
                        <Text style={nametext}>Email: {data.email}</Text>
                        <Text style={nametext}>Username: {data.username}</Text>
                        <Text style={nametext}>Phone No: {data.phone}</Text>
                        <Text style={nametext}>Web-site: {data.website || 'N/A'}</Text>
                        <Text style={nametext}>Company: {companyName}</Text>
                    </View>
                ) : (
                    <View style={box}>
                        <Text style={nametext}>User not found</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default SingleUser
