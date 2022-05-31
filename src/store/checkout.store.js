import { makeObservable, observable, action } from 'mobx';

class Checkout {
	constructor() {
		makeObservable(this, {
			formData: observable,
			change: action
		});
	}

	formData = {
		name: {
			labelId: 'nameOrder',
			title: 'Your name',
			type: 'text',
			value: ''
		},
		phone: {
			labelId: 'phoneOrder',
			title: 'Your phone',
			type: 'text',
			value: ''
		},
		email: {
			labelId: 'emailOrder',
			title: 'Your email',
			type: 'email',
			value: ''
		}
	}

	change(name, value) {
		this.formData[name].value = value;
	}
}

export default new Checkout();
