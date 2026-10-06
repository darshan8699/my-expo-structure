import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { UserItem } from '../../services/api'
import Style from './Style'

const { container, nametext, rowstyle, button, buttontext } = Style

interface UsersListProps {
    data: { item: UserItem }
    onPressHandler: (id: number) => void
    onUpdateHandler: (id: number) => void
    onRemoveHandler: (id: number) => void
}

const UsersList: React.FC<UsersListProps> = ({ data, onPressHandler, onUpdateHandler, onRemoveHandler }) => {
    const item = data.item
    const companyName = typeof item.company === 'string' ? item.company : item.company?.name || 'N/A'

    return (
        <View style={container}>
            <Text style={nametext}>Name: {item.name}</Text>
            <Text style={nametext}>Username: {item.username}</Text>
            <Text style={nametext}>Phone No: {item.phone}</Text>
            <Text style={nametext}>Company: {companyName}</Text>

            <View style={rowstyle}>
                <TouchableOpacity onPress={() => onPressHandler(item.id)} style={button} activeOpacity={0.7}>
                    <Text style={buttontext}>User Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onRemoveHandler(item.id)} style={button} activeOpacity={0.7}>
                    <Text style={buttontext}>Remove User</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onUpdateHandler(item.id)} style={button} activeOpacity={0.7}>
                    <Text style={buttontext}>Edit User</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UsersList
