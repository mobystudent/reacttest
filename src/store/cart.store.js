import { makeObservable, observable, computed, action } from 'mobx';

class Cart {
	constructor() {
		makeObservable(this, {
			products: observable,
			total: computed,
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

	countItem(id) {
		const findProduct = this.products.find((product) => product.id === id);

		return findProduct.count;
	}

	totalItem(id) {
		const findProduct = this.products.find((product) => product.id === id);

		return findProduct.price * findProduct.count;
	}

	count(count, i) {
		this.products[i].count = count;
	}

	delete(idProd) {
		this.products = this.products.filter((prod) => prod.id !== idProd);
	}

	add(id) {
		this.products.push(id);
	}
}

export default new Cart();
