const TOGGLE_DISPLAY = 'TOGGLE-DISPLAY'

export const displayReducer = (state: boolean = true, action: ToggleDisplayACType): boolean => {
	switch (action.type) {
		case TOGGLE_DISPLAY: {
			return !state
		}
		default:
			return state
	}
}

type ToggleDisplayACType = ReturnType<typeof toggleDisplayAC>
export const toggleDisplayAC = () => {
	return {
		type: TOGGLE_DISPLAY
	} as const
}
