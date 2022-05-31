import React from 'react';
import styles from './result.module.styl';
import checkoutStore from '~s/checkout.store';

function Result() {
	const {
		result,
		title,
		text
	} = styles;
	const {
		formData: {
			name: {
				value: nameUser
			},
			phone: {
				value: namePhone
			}
		}
	} = checkoutStore;

	return (
		<div className={ result }>
			<h1 className={ title }>Congratulation { nameUser }</h1>
			<p className={ text }>Your order has been successfully sent <br/> Your total is</p>
			<p className={ text }>We&quot;ll call on this number { namePhone }</p>
		</div>
	);
}

export default Result;
