import React from 'react'
import classes from './Count.module.scss'

export const Count = ({ count, maxCount }: CountPropsType) => {
	const countStatus = count === maxCount ? classes.countError : classes.count
	return <div className={countStatus}>{count}</div>
}

type CountPropsType = {
	count: number
	maxCount: number
}
