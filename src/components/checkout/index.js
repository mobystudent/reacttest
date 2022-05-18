import React from 'react';
import propTypes from 'prop-types';
import styles from './checkout.module.styl';

class Checkout extends React.Component {
	static defaultProps = {
		onClick: function() {}
	}

	static propTypes = {
		formData: propTypes.object.isRequired,
		onClick: propTypes.func
	};

	constructor(props) {
		super();

		const { formData, onClick: onClickForm } = props;

		this.onClickForm = onClickForm;
		this.formData = formData;
		this.state = {
			statusPage: ''
		};
	}

	showResult(event) {
		event.preventDefault();

		this.onClickForm(!this.state.statusPage ? 'result' : '');
	}

	render() {
		const {
			checkout,
			label,
			title,
			form,
			input,
			btn,
			name
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
					<button className={ btn } type='submin' onClick={ (event) => this.showResult(event) }>Order</button>
				</form>
			</div>
		);
	}
}

export default Checkout;
