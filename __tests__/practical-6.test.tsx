import React from 'react'
import renderer from 'react-test-renderer'
import Practical6Dashboard from '../src/app/practical-6/index'
import ListCatalogScreen from '../src/app/practical-6/list-catalog'
import CountVarianceScreen from '../src/app/practical-6/count-variance'

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

describe('Practical 6 Screens', () => {
    it('renders Practical 6 Dashboard screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical6Dashboard />)
        })
        expect(tree).toBeDefined()
    })

    it('renders ListCatalogScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<ListCatalogScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders CountVarianceScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<CountVarianceScreen />)
        })
        expect(tree).toBeDefined()
    })
})
