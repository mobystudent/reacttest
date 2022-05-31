import React from 'react';
import { makeObservable, observable, computed, action } from 'mobx';
import ModalComp from '~c/modal';

class Modal {
	constructor() {
		makeObservable(this, {
			status: observable,
			modal: computed,
			switch: action
		});
	}

	status = false;

	get modal() {
		return this.status ? <ModalComp /> : '';
	}

	switch(val) {
		this.status = val;
	}
}

export default new Modal();
