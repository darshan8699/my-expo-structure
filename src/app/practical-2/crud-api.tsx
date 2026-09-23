import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Spacing } from '@/common/theme'
import { AppModal, AppTextInput } from '@/components/common'
import styles from '@/pages/practical-2/crud-api/crud-api-demo.style'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const ACCENT = '#22C55E'

interface Post {
    id: number
    title: string
    body: string
}

export default function CrudApiDemoScreen() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [editPost, setEditPost] = useState<Post | null>(null)
    const [title, setTitle] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get<Post[]>(`${BASE_URL}?_limit=5`)
                setPosts(data)
            } catch {
                Alert.alert('Error', 'Failed to fetch posts')
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    const handleCreate = async () => {
        if (!title.trim()) return
        try {
            const { data } = await axios.post<Post>(BASE_URL, { title, body: 'New post body', userId: 1 })
            setPosts((prev) => [{ ...data, id: Date.now() }, ...prev])
            setTitle('')
            setModalVisible(false)
        } catch {
            Alert.alert('Error', 'Create failed')
        }
    }

    const handleUpdate = async () => {
        if (!editPost || !title.trim()) return
        try {
            await axios.put(`${BASE_URL}/${editPost.id}`, { title, body: editPost.body })
            setPosts((prev) => prev.map((p) => (p.id === editPost.id ? { ...p, title } : p)))
            setTitle('')
            setEditPost(null)
            setModalVisible(false)
        } catch {
            Alert.alert('Error', 'Update failed')
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`)
            setPosts((prev) => prev.filter((p) => p.id !== id))
        } catch {
            Alert.alert('Error', 'Delete failed')
        }
    }

    const openCreate = () => {
        setEditPost(null)
        setTitle('')
        setModalVisible(true)
    }
    const openEdit = (post: Post) => {
        setEditPost(post)
        setTitle(post.title)
        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.sectionTitle}>Posts ({posts.length})</Text>
                <TouchableOpacity style={styles.createBtn} onPress={openCreate}>
                    <Text style={styles.createBtnText}>+ New</Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <ActivityIndicator color={ACCENT} size="large" style={{ marginTop: Spacing.xl }} />
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <View style={styles.postCard}>
                            <Text style={styles.postId}>#{item.id}</Text>
                            <Text style={styles.postTitle} numberOfLines={2}>
                                {item.title}
                            </Text>
                            <View style={styles.postActions}>
                                <TouchableOpacity style={styles.editBtn} onPress={() => openEdit(item)}>
                                    <Text style={styles.editBtnText}>✏️ Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
                                    <Text style={styles.deleteBtnText}>🗑️ Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )}

            <View style={styles.codeBox}>
                <Text style={styles.codeTitle}>CRUD Pattern</Text>
                <Text
                    style={styles.code}
                >{`GET  axios.get('/posts')\nPOST axios.post('/posts', data)\nPUT  axios.put('/posts/1', data)\nDEL  axios.delete('/posts/1')`}</Text>
            </View>

            <AppModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title={editPost ? 'Edit Post' : 'New Post'}
                primaryButtonText={editPost ? 'Update' : 'Create'}
                onPrimaryPress={editPost ? handleUpdate : handleCreate}
                secondaryButtonText="Cancel"
                onSecondaryPress={() => setModalVisible(false)}
            >
                <AppTextInput value={title} onChangeText={setTitle} placeholder="Post title" />
            </AppModal>
        </View>
    )
}
