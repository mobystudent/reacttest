import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './checkout.module.styl';

function Checkout(props) {
	const { active = false, onClick: onClickForm } = props;
	console.log(active);
	const {
		checkout,
		label,
		title,
		form,
		input,
		btn,
		name,
		hide
	} = styles;
	let [ statusCheckout, setStatusCheckout ] = useState(false);

	function showResult() {
		setStatusCheckout(!statusCheckout ? 'result' : '')
		onClickForm(!statusCheckout ? 'result' : '');
	}

	return (
		<div className={ active ? checkout : hide }>
			<h1 className={ title }>Checkout</h1>
			<form className={ form } action='#'>
				<label className={ label } htmlFor='nameOrder'>
					<span className={ name }>Your name</span>
					<input className={ input } type='text' id='nameOrder' />
				</label>
				<label className={ label } htmlFor='phoneOrder'>
					<span className={ name }>Your phone</span>
					<input className={ input } type='text' id='phoneOrder' />
				</label>
				<label className={ label } htmlFor='emailOrder'>
					<span className={ name }>Your email</span>
					<input className={ input } type='email' id='emailOrder' />
				</label>
				<button className={ btn } type='submin' onClick={ showResult }>Order</button>
			</form>
		</div>
	);
}

Checkout.defaultProps = {
	onClick: function() {}
}

Checkout.propTypes = {
	active: propTypes.bool.isRequired,
	onClick: propTypes.func
};

export default Checkout;
