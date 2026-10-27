import React from 'react'
import renderer from 'react-test-renderer'
import ImageCompareScreen from '../src/app/practical-8/index'

jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        back: jest.fn(),
    }),
    router: {
        push: jest.fn(),
        back: jest.fn(),
    },
    Stack: {
        Screen: () => null,
    },
}))

describe('Practical 8 Screens', () => {
    it('renders ImageCompareScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<ImageCompareScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('handles image pickers without throwing invalid expression errors', async () => {
        let root: any
        await renderer.act(() => {
            root = renderer.create(<ImageCompareScreen />)
        })
        const instance = root.getInstance()
        expect(instance).toBeDefined()
        await renderer.act(async () => {
            await instance.pickGallery(1)
            await instance.pickCamera(1)
        })
    })
})
