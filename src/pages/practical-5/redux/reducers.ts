import { DECREASE_COUNT, INCREASE_COUNT } from './actionTypes'

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0,
}

export const countReducer = (state = initialState, action: { type: string }): CounterState => {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state
    }
}

export default countReducer
