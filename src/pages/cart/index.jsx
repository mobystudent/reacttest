import React from 'react';
import { Link } from 'react-router-dom';
import Table from '~c/table';
import { route } from '~/routes';
import styles from './cart.module.styl';

function Cart() {
	const {
		cart,
		title,
		openForm,
		btn
	} = styles;

	return (
		<div className={ cart }>
			<h1 className={ title }>Корзина</h1>
			<Table />
			<div className={ openForm }>
				<Link className={ btn } to={ route.checkout }>Send</Link>
			</div>
		</div>
	);
}

export default Cart;
