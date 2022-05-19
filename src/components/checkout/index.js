import React from 'react';
import propTypes from 'prop-types';
import styles from './checkout.module.styl';

class Checkout extends React.Component {
	static propTypes = {
		formData: propTypes.object.isRequired,
		onClick: propTypes.func.isRequired,
		onBack: propTypes.func.isRequired
	};

	constructor(props) {
		super();

		const { formData, onClick: onClickForm, onBack } = props;

		this.onClickForm = onClickForm;
		this.onBack = onBack;
		this.formData = formData;
		this.state = {
			statusPage: ''
		};
	}

	showResult(elem) {
		const typeBtn = elem.dataset.type;

		typeBtn === 'result' ? this.onClickForm('result') : this.onBack('cart');
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

		for (let field in this.formData) {
			const { labelId, title, type } = this.formData[field];

			formBody.push(
				<label className={ label } key={ labelId } htmlFor={ labelId }>
					<span className={ name }>{ title }</span>
					<input className={ input } type={ type } id={ labelId } />
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
						<button className={ btn } data-type='result' type='button' onClick={ ({ target }) => this.showResult(target) }>Order</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Checkout;
