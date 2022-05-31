import { makeObservable, observable, action } from 'mobx';

class Modal {
	constructor() {
		makeObservable(this, {
			status: observable,
			switch: action
		});
	}

	status = false;

	switch(val) {
		this.status = val;
	}
}

export default new Modal();
