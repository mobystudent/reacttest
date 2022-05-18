import React from 'react';
import styles from './result.module.styl';

function Result() {
	const {
		result,
		title,
		text
	} = styles;

	return (
		<div className={ result }>
			<h1 className={ title }>Congratulation</h1>
			<p className={ text }>Your order has been successfully sent</p>
		</div>
	);
}

export default Result;
