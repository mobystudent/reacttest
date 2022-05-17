import React, { useState } from 'react';
import Cart from '../cart/Cart';
import Checkout from '../checkout/Checkout';
import styles from './app.module.styl';

function App() {
	const {
		app
	} = styles;
	let [ statusCheckout, setStatusCheckout ] = useState(false);

	function openNextSection(status) {
		console.warn(status);
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
		</div>
	);
}

export default App;
