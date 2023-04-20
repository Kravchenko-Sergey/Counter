import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { initialStateReducer } from './reducers/initialState-reducer'
import { displayReducer } from './reducers/display-reducer'
import { loadState, saveState } from '../localStorage'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	initialState: initialStateReducer,
	display: displayReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const persistedState = loadState()

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => saveState(store.getState()))

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

// @ts-ignore
window.store = store
