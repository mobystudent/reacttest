import { makeObservable, observable, computed, action } from 'mobx';

class Cart {
	constructor() {
		makeObservable(this, {
			products: observable,
			total: computed,
			count: action,
			delete: action
		});
	}

	products = [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			current: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			current: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			current: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			current: 1
		}
	];

	get total() {
		return this.products.reduce((sum, { price, current }) => sum + price * current, 0);
	}

	count(count, i) {
		this.products[i].current = count;
	}

	delete(idProd) {
		this.products.forEach((prod, i, arr) => prod.id === idProd ? arr.splice(i, 1) : false);
	}
}

export default new Cart();
