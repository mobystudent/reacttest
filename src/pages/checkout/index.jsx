import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import checkoutStore from '~s/checkout.store';
import { route } from '~/routes';
import modalStore from '~s/modal.store';
import styles from './checkout.module.styl';

const Checkout = observer(() => {
	const {
		checkout,
		label,
		title,
		form,
		input,
		btn,
		name,
		wrap,
		elem,
		error
	} = styles;
	const formBody = [];

	for (let field in checkoutStore.formData) {
		const { labelId, title, type, placeholder, required, value, valid, message = '' } = checkoutStore.formData[field];

		formBody.push(
			<div className={ elem } key={ labelId }>
				<label className={ label } htmlFor={ labelId }>
					<span className={ name }>{ title }</span>
					<input
						className={ input }
						type={ type }
						id={ labelId }
						placeholder={ placeholder }
						value={ value }
						required={ required }
						onChange={ (event) => checkoutStore.change(field, event.target.value) }
					/>
				</label>
				{ (!valid && valid !== null) && <span className={ error }>{ message }</span> }
			</div>
		);
	}

	return (
		<div className={ checkout }>
			<h1 className={ title }>Checkout</h1>
			<form className={ form } action='#'>
				{ formBody }
				<div className={ wrap }>
					<Link className={ btn } to={ route.cart }>Back</Link>
					<button className={ btn } type='button' disabled={ !checkoutStore.formValid } onClick={ () => modalStore.switch(true) }>Order</button>
				</div>
			</form>
			{ modalStore.modal }
		</div>
	);
});

export default Checkout;
