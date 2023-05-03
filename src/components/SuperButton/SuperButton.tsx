import React from 'react'

export const SuperButton = ({ title, callback, className, btnDisabledStatus }: SuperButtonPropsType) => {
	const onClickHandler = () => callback()

	return (
		<button onClick={onClickHandler} className={className} disabled={btnDisabledStatus}>
			{title}
		</button>
	)
}

type SuperButtonPropsType = {
	title: string
	callback: () => void
	className: string
	btnDisabledStatus?: boolean
}
