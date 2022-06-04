import React from 'react';
import styles from './result.module.styl';
import checkoutStore from '~s/checkout.store';
import cartStore from '~s/cart.store';

function Result() {
	const {
		result,
		title,
		text
	} = styles;
	const {
		dataField: {
			name,
			phone
		}
	} = checkoutStore;

	return (
		<div className={ result }>
			<h1 className={ title }>Congratulation { name }</h1>
			<p className={ text }>Your order has been successfully sent <br/> Your total is { cartStore.total }</p>
			<p className={ text }>We&quot;ll call on this number { phone }</p>
		</div>
	);
}

export default Result;
