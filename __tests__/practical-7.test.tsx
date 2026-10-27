import React from 'react'
import renderer from 'react-test-renderer'
import FlightHomeScreen from '../src/app/practical-7/index'
import BookFlightScreen from '../src/app/practical-7/book-flight'
import SelectTicketScreen from '../src/app/practical-7/select-ticket'

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

describe('Practical 7 Screens', () => {
    it('renders FlightHomeScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<FlightHomeScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders BookFlightScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<BookFlightScreen />)
        })
        expect(tree).toBeDefined()
    })

    it('renders SelectTicketScreen correctly', async () => {
        let tree
        await renderer.act(() => {
            tree = renderer.create(<SelectTicketScreen />)
        })
        expect(tree).toBeDefined()
    })
})
