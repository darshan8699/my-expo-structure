import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

interface PlatformLayout {
    width: number
    height: number
    isLandscape: boolean
    isTablet: boolean
}

/**
 * usePlatformLayout — returns current screen dimensions and orientation state.
 * Updates reactively on orientation change.
 */
export const usePlatformLayout = (): PlatformLayout => {
    const [layout, setLayout] = useState<PlatformLayout>(() => {
        const { width, height } = Dimensions.get('window')
        return {
            width,
            height,
            isLandscape: width > height,
            isTablet: width >= 768,
        }
    })

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setLayout({
                width: window.width,
                height: window.height,
                isLandscape: window.width > window.height,
                isTablet: window.width >= 768,
            })
        })

        return () => subscription.remove()
    }, [])

    return layout
}
