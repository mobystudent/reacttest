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

	formData = {
		name: {
			labelId: 'nameOrder',
			title: 'Your name',
			type: 'text',
			placeholder: 'Enter your name',
			pattern: /^[aA-zZ -.]{2,}$/ui,
			value: '',
			required: true,
			message: 'Name is invalid',
			valid: null
		},
		phone: {
			labelId: 'phoneOrder',
			title: 'Your phone',
			type: 'text',
			placeholder: 'Enter your phone',
			pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
			value: '',
			required: true,
			message: 'Phone is invalid',
			valid: null
		},
		email: {
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
	}

	get formValid() {
		return Object.values(this.formData).every((field) => field.valid);
	}

	get dataField() {
		const newData = {};

		for (let field in this.formData) {
			newData[field] = this.formData[field].value;
		}

		return newData;
	}

	change(name, value) {
		const valid = this.formData[name].pattern.test(value);

		this.formData[name].valid = valid;
		this.formData[name].value = value;
	}
}

export default new Checkout();
