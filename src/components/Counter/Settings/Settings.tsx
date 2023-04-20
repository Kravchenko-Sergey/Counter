import React, { ChangeEvent, Dispatch } from 'react'
import classes from './Settings.module.css'
import { ActionsType, onChangeMaxCountAC, onChangeStartCountAC } from '../../../state/reducers/initialState-reducer'

type SettingsPropsType = {
	maxCount: number
	startCount: number
	btnDisabledStatus: boolean
	dispatch: Dispatch<ActionsType>
}

const Settings = ({ maxCount, startCount, dispatch }: SettingsPropsType) => {
	const onChangeMaxCount = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(onChangeMaxCountAC(Number(e.currentTarget.value)))
	}
	const onChangeStartCount = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(onChangeStartCountAC(Number(e.currentTarget.value)))
	}

	const countBlockStatus = maxCount !== 0 && maxCount !== startCount ? classes.countBlock : classes.countBlockError

	return (
		<>
			<div className={classes.item}>
				<div className={classes.title}>max value:</div>
				<input
					type='number'
					min={startCount}
					value={maxCount}
					onChange={onChangeMaxCount}
					className={countBlockStatus}
				/>
			</div>
			<div className={classes.item}>
				<div className={classes.title}>start value:</div>
				<input
					type='number'
					min={0}
					max={maxCount}
					value={startCount}
					onChange={onChangeStartCount}
					className={countBlockStatus}
				/>
			</div>
		</>
	)
}

export default Settings
