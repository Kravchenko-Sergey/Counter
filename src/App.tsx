import React from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

export type InitialStateType = {
	count: number
	maxCount: number
	startCount: number
}

function App() {
	return (
		<div className='App'>
			<Counter />
		</div>
	)
}

export default App
