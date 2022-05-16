import React from 'react';
import Table from '../table/Table';
import styles from './app.module.styl';

const {
	app,
	title
} = styles;

function App() {
	return (
		<div className={ app }>
			<h1 className={ title }>Таблица</h1>
			<Table />
		</div>
	);
}

export default App;
