import { makeObservable, observable, computed, action } from 'mobx';

class Cart {
	constructor() {
		makeObservable(this, {
			products: observable,
			total: computed,
			amountProducts: computed,
			totalItem: action,
			countItem: action,
			count: action,
			delete: action,
			add: action
		});
	}

	products = [];

	get total() {
		return this.products.reduce((sum, { price, count }) => sum + price * count, 0);
	}

	get amountProducts() {
		return this.products.length;
	}

	countItem(id) {
		const findProduct = this.products.find((product) => product.id === id);

		return findProduct.count;
	}

	totalItem(id) {
		const findProduct = this.products.find((product) => product.id === id);

		return findProduct.price * findProduct.count;
	}

	count(id, count) {
		this.products.forEach((product) => {
			if (product.id === id) {
				product.count = count;
			}
		});
	}

	delete(id) {
		this.products = this.products.filter((product) => product.id !== id);
	}

	add(id) {
		this.products.push({ ...id, count: 1 });
	}
}

export default new Cart();
