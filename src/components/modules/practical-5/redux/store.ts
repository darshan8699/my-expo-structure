// @ts-ignore classic createStore
import { createStore } from 'redux'
import { countReducer } from './reducers'

// @ts-ignore classic createStore
export const store = createStore(countReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
