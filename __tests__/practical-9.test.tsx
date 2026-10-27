import React from 'react'
import renderer from 'react-test-renderer'
import Practical9Dashboard from '../src/app/practical-9/index'
import DriverAppScreen from '../src/app/practical-9/driver'
import UserAppScreen from '../src/app/practical-9/user'
import FeaturesDemoScreen from '../src/app/practical-9/features'
import ScrollDemoScreen from '../src/app/practical-9/scroll-demo'
import LocalizationScreen from '../src/app/practical-9/localization'

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

describe('Practical 9 Screens', () => {
    it('renders Practical 9 Dashboard screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical9Dashboard />)
        })
        expect(tree).toBeDefined()
    })

    it('renders DriverAppScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<DriverAppScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders UserAppScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<UserAppScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders FeaturesDemoScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<FeaturesDemoScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders ScrollDemoScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<ScrollDemoScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders LocalizationScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<LocalizationScreen />)
        })
        expect(tree).toBeDefined()
    })
})
