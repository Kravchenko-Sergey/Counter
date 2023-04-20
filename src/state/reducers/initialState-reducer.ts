import { InitialStateType } from '../../App'

const HANDLE_INCREMENT = 'HANDLE-INCREMENT'
const RESET_COUNT = 'RESENT-COUNT'
const ON_CHANGE_MAX_COUNT = 'ON-CHANGE-MAX-COUNT'
const ON_CHANGE_START_COUNT = 'ON-CHANGE-START-COUNT'
const SWITCH_BETWEEN_MENU_AND_COUNTER = 'SWITCH-BETWEEN-MENU-AND-COUNTER'

const initialState: InitialStateType = {
	count: 0,
	maxCount: 5,
	startCount: 0
}

export const initialStateReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case HANDLE_INCREMENT: {
			return { ...state, count: state.count + 1 }
		}
		case RESET_COUNT: {
			return { ...state, count: (state.count = state.startCount) }
		}
		case ON_CHANGE_MAX_COUNT: {
			return { ...state, maxCount: action.payload.value }
		}
		case ON_CHANGE_START_COUNT: {
			return { ...state, startCount: action.payload.value }
		}
		case SWITCH_BETWEEN_MENU_AND_COUNTER: {
			return {
				...state,
				count: (state.count = state.startCount)
			}
		}
		default:
			return state
	}
}

export type ActionsType =
	| HandleIncrementACType
	| ResetCountACType
	| OnChangeMaxCountACType
	| OnChangeStartCountACType
	| switchBetweenMenuAndCounterACType

type HandleIncrementACType = ReturnType<typeof handleIncrementAC>
export const handleIncrementAC = () => {
	return {
		type: HANDLE_INCREMENT
	} as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
	return {
		type: RESET_COUNT
	} as const
}

type OnChangeMaxCountACType = ReturnType<typeof onChangeMaxCountAC>
export const onChangeMaxCountAC = (value: number) => {
	return {
		type: ON_CHANGE_MAX_COUNT,
		payload: { value }
	} as const
}

type OnChangeStartCountACType = ReturnType<typeof onChangeStartCountAC>
export const onChangeStartCountAC = (value: number) => {
	return {
		type: ON_CHANGE_START_COUNT,
		payload: { value }
	} as const
}

type switchBetweenMenuAndCounterACType = ReturnType<typeof switchBetweenMenuAndCounterAC>
export const switchBetweenMenuAndCounterAC = () => {
	return {
		type: SWITCH_BETWEEN_MENU_AND_COUNTER
	} as const
}
