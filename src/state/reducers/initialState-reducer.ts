import { InitialStateType } from '../../components/Counter/Counter'

const initialState: InitialStateType = { count: 0, maxCount: 5, startCount: 0 }

export const initialStateReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'HANDLE-INCREMENT':
			return { ...state, count: state.count + 1 }
		case 'RESENT-COUNT':
			return { ...state, count: (state.count = state.startCount) }
		case 'ON-CHANGE-MAX-COUNT':
			return { ...state, maxCount: action.payload.value }
		case 'ON-CHANGE-START-COUNT':
			return { ...state, startCount: action.payload.value }
		case 'SWITCH-BETWEEN-MENU-AND-COUNTER':
			return { ...state, count: (state.count = state.startCount) }
		default:
			return state
	}
}

export const handleIncrementAC = () => ({ type: 'HANDLE-INCREMENT' } as const)
export const resetCountAC = () => ({ type: 'RESENT-COUNT' } as const)
export const onChangeMaxCountAC = (value: number) => ({ type: 'ON-CHANGE-MAX-COUNT', payload: { value } } as const)
export const onChangeStartCountAC = (value: number) => ({ type: 'ON-CHANGE-START-COUNT', payload: { value } } as const)
export const switchBetweenMenuAndCounterAC = () => ({ type: 'SWITCH-BETWEEN-MENU-AND-COUNTER' } as const)

export type ActionsType =
	| ReturnType<typeof handleIncrementAC>
	| ReturnType<typeof resetCountAC>
	| ReturnType<typeof onChangeMaxCountAC>
	| ReturnType<typeof onChangeStartCountAC>
	| ReturnType<typeof switchBetweenMenuAndCounterAC>
