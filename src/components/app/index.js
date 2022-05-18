import React, { useState } from 'react';
import Cart from '~c/cart';
import Checkout from '~c/checkout';
import Result from '~c/result';
import styles from './app.module.styl';

function App() {
	const {
		app
	} = styles;
	let [ statusCheckout, setStatusCheckout ] = useState('');

	function openNextSection(status) {
		setStatusCheckout(status);
	}

	return (
		<div className={ app }>
			<Cart
				onClick={ (status) => ( openNextSection(status) ) }
			/>
			<Checkout
				active={ statusCheckout }
				onClick={ (status) => ( openNextSection(status) ) }
			/>
			<Result
				active={ statusCheckout }
			/>
		</div>
	);
}

export default App;
