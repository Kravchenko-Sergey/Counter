export const displayReducer = (state: boolean = true, action: ActionsType): boolean => {
	switch (action.type) {
		case 'TOGGLE-DISPLAY':
			return !state
		default:
			return state
	}
}

export const toggleDisplayAC = () => ({ type: 'TOGGLE-DISPLAY' } as const)

type ActionsType = ReturnType<typeof toggleDisplayAC>
