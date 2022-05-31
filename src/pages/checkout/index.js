import React from 'react';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';
import Modal from '~c/modal';
import checkoutStore from '~s/checkout.store';
import styles from './checkout.module.styl';

class Checkout extends React.Component {
	static propTypes = {
		onSend: propTypes.func.isRequired,
		onBack: propTypes.func.isRequired
	};

	constructor() {
		super();

		this.state = {
			statusPage: '',
			statusModal: false
		};
	}

	showResult(elem) {
		const typeBtn = elem.dataset.type;

		typeBtn === 'result' ? this.props.onSend('result') : this.props.onBack('cart');
	}

	render() {
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
						<button className={ btn } data-type='back' type='button' onClick={ ({ target }) => this.showResult(target) }>Back</button>
						<button className={ btn } type='button' onClick={ () => this.setState({ statusModal: true }) }>Order</button>
					</div>
				</form>
				<Modal
					status={ this.state.statusModal }
					onModal={ (status) => ( this.setState({ statusModal: status }) ) }
					onResult={ (page) => this.showResult(page) }
				/>
			</div>
		);
	}
}

export default observer(Checkout);
