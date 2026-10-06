import axios from 'axios'
import BaseURL from '../config/baseUrl'

export interface UserItem {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website?: string
    company?: {
        name: string
        catchPhrase?: string
        bs?: string
    }
}

export interface UserFormData {
    name: string
    username: string
    email: string
    phone: string
    website?: string | null
    company?: { name: string } | string | null
}

export const homeAPI = () => {
    return axios<UserItem[]>(`${BaseURL}/users`, {
        method: 'GET',
    })
        .then((response) => response)
        .catch((e) => e.response)
}

export const singleUserAPI = (id: string | number) => {
    return axios<UserItem>(`${BaseURL}/users/${id}`, {
        method: 'GET',
    })
        .then((response) => response)
        .catch((e) => e.response)
}

export const removeAPI = (id: string | number) => {
    return axios(`${BaseURL}/users/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response)
        .catch((e) => e.response)
}

export const adduserAPI = (data: UserFormData) => {
    return axios<UserItem>(`${BaseURL}/users`, {
        method: 'POST',
        data: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response)
        .catch((e) => e.response)
}

export const updateuserAPI = (data: UserFormData, id: string | number) => {
    return axios<UserItem>(`${BaseURL}/users/${id}`, {
        method: 'PUT',
        data: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response)
        .catch((e) => e.response)
}
