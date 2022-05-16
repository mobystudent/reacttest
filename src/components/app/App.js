import React, { useState } from 'react';
import Cart from '../cart/Cart';
import styles from './app.module.styl';

function App() {
	const {
		app
	} = styles;
	let [ statusCheckout, setStatusCheckout ] = useState(false);

	function openCheckout(status) {
		setStatusCheckout(statusCheckout = !status);
		console.warn(statusCheckout);
	}

	return (
		<div className={ app }>
			<Cart
				onClick={ (status) => ( openCheckout(status) ) }
			/>
		</div>
	);
}

export default App;
