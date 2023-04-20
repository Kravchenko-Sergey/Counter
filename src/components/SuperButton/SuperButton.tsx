import React from 'react'

type SuperButtonPropsType = {
	title: string
	callback: () => void
	className: string
	btnDisabledStatus?: boolean
}

const SuperButton = ({ title, callback, className, btnDisabledStatus }: SuperButtonPropsType) => {
	const onClickHandler = () => callback()

	return (
		<button onClick={onClickHandler} className={className} disabled={btnDisabledStatus}>
			{title}
		</button>
	)
}

export default SuperButton
