import {
	handleIncrementAC,
	initialStateReducer,
	onChangeMaxCountAC,
	onChangeStartCountAC,
	resetCountAC,
	switchBetweenMenuAndCounterAC
} from './initialState-reducer'

const initialState = {
	count: 7,
	maxCount: 10,
	startCount: 3
}

test('counter value should increment properly', () => {
	const endState = initialStateReducer(initialState, handleIncrementAC())
	expect(endState.count).toBe(8)
	expect(endState.maxCount).toBe(10)
	expect(endState.startCount).toBe(3)
})

test('counter value should reset correctly', () => {
	const endState = initialStateReducer(initialState, resetCountAC())
	expect(endState.count).toBe(3)
	expect(endState.maxCount).toBe(10)
	expect(endState.startCount).toBe(3)
})

test('the maximum value of the counter should change correctly', () => {
	const endState = initialStateReducer(initialState, onChangeMaxCountAC(11))
	expect(endState.count).toBe(3)
	expect(endState.maxCount).toBe(11)
	expect(endState.startCount).toBe(3)
})

test('the minimum value of the counter should change correctly', () => {
	const endState = initialStateReducer(initialState, onChangeStartCountAC(2))
	expect(endState.count).toBe(3)
	expect(endState.maxCount).toBe(10)
	expect(endState.startCount).toBe(2)
})

test('counter value must be set correctly', () => {
	const endState = initialStateReducer(initialState, switchBetweenMenuAndCounterAC())
	expect(endState.count).toBe(3)
	expect(endState.maxCount).toBe(10)
	expect(endState.startCount).toBe(3)
})
