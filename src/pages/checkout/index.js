import React from 'react';
import propTypes from 'prop-types';
import Modal from '~c/modal';
import styles from './checkout.module.styl';

class Checkout extends React.Component {
	static propTypes = {
		formData: propTypes.object.isRequired,
		onSend: propTypes.func.isRequired,
		onBack: propTypes.func.isRequired,
		onSave: propTypes.func.isRequired
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

		for (let field in this.props.formData) {
			const { labelId, title, type, value } = this.props.formData[field];

			formBody.push(
				<label className={ label } key={ labelId } htmlFor={ labelId }>
					<span className={ name }>{ title }</span>
					<input
						className={ input }
						type={ type }
						id={ labelId }
						value={ value }
						onChange={ (event) => this.props.onSave(field, event.target.value) }
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

export default Checkout;
