import React, { ChangeEvent } from 'react'
import classes from './Settings.module.scss'
import { onChangeMaxCountAC, onChangeStartCountAC } from '../../../state/reducers/initialState-reducer'
import { useDispatch } from 'react-redux'

export const Settings = ({ maxCount, startCount }: SettingsPropsType) => {
	const dispatch = useDispatch()
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

type SettingsPropsType = {
	maxCount: number
	startCount: number
	btnDisabledStatus: boolean
}
