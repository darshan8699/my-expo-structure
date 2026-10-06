import React from 'react'
import renderer from 'react-test-renderer'
import Practical5HomeScreen from '../src/app/practical-5/index'
import Practical5AddUserScreen from '../src/app/practical-5/add-user'
import Practical5SingleUserScreen from '../src/app/practical-5/single-user'
import Practical5UpdateUserScreen from '../src/app/practical-5/update-user'
import Practical5CounterScreen from '../src/app/practical-5/counter'
import Practical5SplashScreen from '../src/app/practical-5/splash'

jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        back: jest.fn(),
        replace: jest.fn(),
    }),
    router: {
        push: jest.fn(),
        back: jest.fn(),
        replace: jest.fn(),
    },
    useLocalSearchParams: () => ({ id: '1' }),
    Stack: {
        Screen: () => null,
    },
}))

describe('Practical 5 Screens', () => {
    it('renders ListOfUsers screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical5HomeScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders AddUser screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical5AddUserScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders SingleUser screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical5SingleUserScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders UpdateUser screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical5UpdateUserScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders Counter screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical5CounterScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders Splash screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical5SplashScreen />)
        })
        expect(tree).toBeDefined()
    })
})
