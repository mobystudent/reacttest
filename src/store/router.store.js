import React from 'react';
import { makeObservable, observable, computed, action } from 'mobx';
import Cart from '~p/cart';
import Checkout from '~p/checkout';
import Result from '~p/result';

class Router {
	constructor() {
		makeObservable(this, {
			activeRoute: observable,
			component: computed,
			moveTo: action
		});
	}

	routers = {
		cart: () => <Cart />,
		checkout: () => <Checkout />,
		result: () => <Result />
	}
	activeRoute = 'cart';

	get component() {
		return this.routers[this.activeRoute]();
	}

	moveTo(page) {
		this.activeRoute = page;
	}
}

export default new Router();
