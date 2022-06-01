import React from 'react';
import { observer } from 'mobx-react';
import checkoutStore from '~s/checkout.store';
import routerStore from '~s/router.store';
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
		wrap
	} = styles;
	const formBody = [];

	for (let field in checkoutStore.formData) {
		const { labelId, title, type, value } = checkoutStore.formData[field];

		formBody.push(
			<label className={ label } key={ labelId } htmlFor={ labelId }>
				<span className={ name }>{ title }</span>
				<input
					className={ input }
					type={ type }
					id={ labelId }
					value={ value }
					onChange={ (event) => checkoutStore.change(field, event.target.value) }
				/>
			</label>
		);
	}

	return (
		<div className={ checkout }>
			<h1 className={ title }>Checkout</h1>
			<form className={ form } action='#'>
				{ formBody }
				<div className={ wrap }>
					<button className={ btn } type='button' onClick={ () => routerStore.moveTo('cart') }>Back</button>
					<button className={ btn } type='button' onClick={ () => modalStore.switch(true) }>Order</button>
				</div>
			</form>
			{ modalStore.modal }
		</div>
	);
});

export default Checkout;
