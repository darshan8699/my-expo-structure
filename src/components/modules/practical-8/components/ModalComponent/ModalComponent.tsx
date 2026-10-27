import { AntDesign, Feather } from '@expo/vector-icons'
import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from './Style'

interface ModalComponentProps {
    isModalVisible: boolean
    close: () => void
    pickCamera: () => void
    pickGallery: () => void
    pickSample?: () => void
}

export default function ModalComponent({
    isModalVisible,
    close,
    pickCamera,
    pickGallery,
    pickSample,
}: ModalComponentProps) {
    return (
        <Modal visible={isModalVisible} transparent={true} animationType="fade" onRequestClose={close}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalview}>
                    <TouchableOpacity onPress={close} style={styles.closebutton} activeOpacity={0.7}>
                        <AntDesign name="close" size={22} color="#111111" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalbutton} onPress={pickCamera} activeOpacity={0.8}>
                        <Feather name="camera" size={18} color="#ffffff" />
                        <Text style={styles.modaltext}>Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalbutton} onPress={pickGallery} activeOpacity={0.8}>
                        <Feather name="image" size={18} color="#ffffff" />
                        <Text style={styles.modaltext}>Gallery</Text>
                    </TouchableOpacity>

                    {pickSample && (
                        <TouchableOpacity
                            style={[styles.modalbutton, { backgroundColor: '#4284f4' }]}
                            onPress={pickSample}
                            activeOpacity={0.8}
                        >
                            <Feather name="layers" size={18} color="#ffffff" />
                            <Text style={styles.modaltext}>Sample Image</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    )
}
