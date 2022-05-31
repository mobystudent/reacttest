import React from 'react';
import propTypes from 'prop-types';
import Table from '~c/table';
import styles from './cart.module.styl';

function Cart(props) {
	const { onClick: onClickForm } = props;
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
				<button className={ btn } type="button" onClick={ () => onClickForm('checkout') }>Send</button>
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
