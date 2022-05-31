import React from 'react';
import Table from '~c/table';
import routerStore from '~s/router.store';
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
				<button className={ btn } type="button" onClick={ () => routerStore.moveTo('checkout') }>Send</button>
			</div>
		</div>
	);
}

export default Cart;
