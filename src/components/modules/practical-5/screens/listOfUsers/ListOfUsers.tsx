import { router } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, RefreshControl, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Spinner, UsersList } from '../../components'
import Colors from '../../constants/colors'
import * as API from '../../services/api'
import { UserItem } from '../../services/api'
import Style from './Style'

const { container, contain, actionsRow, button, secondaryButton, buttontext } = Style

const ListOfUsers: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<UserItem[]>([])

    const showUser = useCallback(() => {
        API.homeAPI()
            .then((response) => {
                setLoading(false)
                setRefreshing(false)
                if (response?.data) {
                    setData(response.data)
                }
            })
            .catch(() => {
                setLoading(false)
                setRefreshing(false)
            })
    }, [])

    useEffect(() => {
        showUser()
    }, [showUser])

    const onRefresh = () => {
        setRefreshing(true)
        showUser()
    }

    const onPressHandler = (id: number) => {
        router.push({
            pathname: '/practical-5/single-user',
            params: { id: String(id) },
        })
    }

    const onUpdateHandler = (id: number) => {
        router.push({
            pathname: '/practical-5/update-user',
            params: { id: String(id) },
        })
    }

    const onclick = () => {
        router.push('/practical-5/add-user')
    }

    const onRemoveHandler = (id: number) => {
        Alert.alert('Confirm Delete', 'Are you sure you want to remove this user?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Remove',
                style: 'destructive',
                onPress: () => {
                    setLoading(true)
                    API.removeAPI(id)
                        .then(() => {
                            setLoading(false)
                            Alert.alert('Success', 'User removed successfully')
                            // Locally filter so UI updates immediately even with fake REST API
                            setData((prev) => prev.filter((u) => u.id !== id))
                        })
                        .catch(() => {
                            setLoading(false)
                            Alert.alert('Error', 'Failed to remove user')
                        })
                },
            },
        ])
    }

    return (
        <SafeAreaView style={container}>
            <StatusBar backgroundColor={Colors.Header_color} barStyle="light-content" />
            <View style={contain}>
                <Header text="List of Users" onBack={() => router.back()} />
                <View style={actionsRow}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={secondaryButton}
                            onPress={() => router.push('/practical-5/counter')}
                            activeOpacity={0.8}
                        >
                            <Text style={buttontext}>Redux Counter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={secondaryButton}
                            onPress={() => router.push('/practical-5/splash')}
                            activeOpacity={0.8}
                        >
                            <Text style={buttontext}>Splash</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={button} onPress={onclick} activeOpacity={0.8}>
                        <Text style={buttontext}>+ Add User</Text>
                    </TouchableOpacity>
                </View>

                {loading && !refreshing ? (
                    <Spinner
                        visible={loading}
                        textContent="Loading Users..."
                        textStyle={{ color: Colors.Primary_BackgroundColor }}
                    />
                ) : (
                    <FlatList
                        bounces={true}
                        data={data}
                        keyExtractor={(item) => String(item.id)}
                        showsVerticalScrollIndicator={false}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        renderItem={({ item }) => {
                            return (
                                <UsersList
                                    data={{ item }}
                                    onPressHandler={onPressHandler}
                                    onRemoveHandler={onRemoveHandler}
                                    onUpdateHandler={onUpdateHandler}
                                />
                            )
                        }}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default ListOfUsers
