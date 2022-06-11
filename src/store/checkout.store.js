import { makeObservable, observable, computed, action } from 'mobx';

class Checkout {
	constructor() {
		makeObservable(this, {
			formData: observable,
			formValid: computed,
			dataField: computed,
			change: action
		});
	}

	formData = new Map([
		[
			'name', {
				labelId: 'nameOrder',
				title: 'Your name',
				type: 'text',
				placeholder: 'Enter your name',
				pattern: /^[aA-zZ -.]{2,}$/ui,
				value: '',
				required: true,
				message: 'Name is invalid',
				valid: null
			}
		],
		[
			'phone', {
				labelId: 'phoneOrder',
				title: 'Your phone',
				type: 'text',
				placeholder: 'Enter your phone',
				pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
				value: '',
				required: true,
				message: 'Phone is invalid',
				valid: null
			}
		],
		[
			'email', {
				labelId: 'emailOrder',
				title: 'Your email',
				type: 'email',
				placeholder: 'Enter your email',
				pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
				value: '',
				required: false,
				message: 'Email is invalid',
				valid: null
			}
		]
	]);

	get formValid() {
		return [...this.formData.values()].every((field) => field.valid);
	}

	get dataField() {
		return (name) => this.formData.get(name).value;
	}

	change(name, value) {
		const valueField = this.formData.get(name);
		const valid = valueField.pattern.test(value);

		this.formData.set(name, { ...valueField, value, valid });
	}
}

export default new Checkout();
