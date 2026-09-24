import React from 'react'
import renderer from 'react-test-renderer'
import Practical4HomeScreen from '../src/app/practical-4/index'

jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    Stack: {
        Screen: () => null,
    },
}))

describe('<Practical4HomeScreen />', () => {
    it('renders correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<Practical4HomeScreen />)
        })
        expect(tree).toBeDefined()
    })
})
