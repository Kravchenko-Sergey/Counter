import React from 'react'
import classes from '../Counter.module.css'

type CountPropsType = {
	count: number
	maxCount: number
}

const Count = ({ count, maxCount }: CountPropsType) => {
	const countStatus = count === maxCount ? classes.countError : classes.count
	return <div className={countStatus}>{count}</div>
}

export default Count
