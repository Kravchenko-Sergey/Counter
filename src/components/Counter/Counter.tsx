import React from 'react'
import classes from './Counter.module.css'
import Settings from './Settings/Settings'
import Count from './Count/Count'
import SuperButton from '../SuperButton/SuperButton'
import {
	handleIncrementAC,
	resetCountAC,
	switchBetweenMenuAndCounterAC
} from '../../state/reducers/initialState-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../state/store'
import { toggleDisplayAC } from '../../state/reducers/display-reducer'

const Counter = () => {
	const initialState = useSelector((state: AppRootStateType): InitialStateType => state.initialState)
	const display = useSelector((state: AppRootStateType): boolean => state.display)
	const dispatch = useDispatch()

	let btnDisabledStatus = initialState.startCount === initialState.maxCount
	const switchBetweenMenuAndCounter = () => {
		dispatch(toggleDisplayAC())
		dispatch(switchBetweenMenuAndCounterAC())
	}
	const handleIncrement = () => {
		initialState.count < initialState.maxCount && dispatch(handleIncrementAC())
	}
	const resetCount = () => dispatch(resetCountAC())

	const buttonIncStatus = initialState.count === initialState.maxCount ? classes.buttonError : classes.button
	const buttonResetStatus = initialState.count === initialState.startCount ? classes.buttonError : classes.button
	const buttonSetStatus = btnDisabledStatus ? classes.buttonError : classes.button

	return (
		<div className={classes.container}>
			{display ? (
				<>
					<div className={classes.display}>
						<Count count={initialState.count} maxCount={initialState.maxCount} />
					</div>
					<div className={classes.buttonsBlock}>
						<SuperButton title={'inc'} callback={handleIncrement} className={buttonIncStatus} />
						<SuperButton title={'reset'} callback={resetCount} className={buttonResetStatus} />
						<SuperButton title={'set'} callback={switchBetweenMenuAndCounter} className={classes.button} />
					</div>
				</>
			) : (
				<>
					<div className={classes.display}>
						<Settings
							maxCount={initialState.maxCount}
							startCount={initialState.startCount}
							btnDisabledStatus={btnDisabledStatus}
						/>
					</div>
					<div className={classes.buttonsBlock}>
						<SuperButton
							title={'set'}
							callback={switchBetweenMenuAndCounter}
							className={buttonSetStatus}
							btnDisabledStatus={btnDisabledStatus}
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default Counter

export type InitialStateType = {
	count: number
	maxCount: number
	startCount: number
}
