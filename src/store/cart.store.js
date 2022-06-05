import { makeObservable, observable, computed, action } from 'mobx';

class Cart {
	constructor() {
		makeObservable(this, {
			products: observable,
			total: computed,
			count: action,
			delete: action,
			add: action
		});
	}

	products = [];


	get total() {
		return this.products.reduce((sum, { price, current }) => sum + price * current, 0);
	}

	count(count, i) {
		this.products[i].current = count;
	}

	delete(idProd) {
		this.products.forEach((prod, i, arr) => prod.id === idProd ? arr.splice(i, 1) : false);
	}

	add(id) {
		this.products.push(id);
	}
}

export default new Cart();
