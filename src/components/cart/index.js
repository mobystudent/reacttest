import React, { useState } from 'react';
import propTypes from 'prop-types';
import Table from '~c/table';
import styles from './cart.module.styl';

function Cart(props) {
	const { onClick: onClickForm } = props;
	const {
		cart,
		hide,
		title,
		openForm,
		btn
	} = styles;
	let [ statusCart, setStatusCart ] = useState('');

	function showCheckout() {
		setStatusCart(!statusCart ? 'checkout' : '')
		onClickForm(!statusCart ? 'checkout' : '');
	}

	return (
		<div className={ statusCart ? hide : cart }>
			<h1 className={ title }>Корзина</h1>
			<Table />
			<div className={ openForm }>
				<button className={ btn } type="button" onClick={ showCheckout }>Send</button>
			</div>
		</div>
	);
}

Cart.defaultProps = {
	onClick: function() {}
}

Cart.propTypes = {
	onClick: propTypes.func
};

export default Cart;
