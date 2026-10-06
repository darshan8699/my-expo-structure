import React from 'react'
import renderer from 'react-test-renderer'
import Practical4HomeScreen from '../src/app/practical-4/index'
import Practical4RegistrationScreen from '../src/app/practical-4/registration'

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

describe('Practical 4 Screens', () => {
    it('renders Login screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical4HomeScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders Registration screen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical4RegistrationScreen />)
        })
        expect(tree).toBeDefined()
    })
})
