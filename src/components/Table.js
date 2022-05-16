import React, { useState } from 'react';
import Counter from './Counter';

const stateDef = {
	products: [
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
	]
}

function Table() {
	let [ state, setState ] = useState(stateDef);
	let [ total, setTotal ] = useState(0);

	function setCount(count, i) {
		const newProds = [...state.products];
		newProds[i] = {...newProds[i], current: count};

		// console.log(newProds);
		setState({ products: newProds });
		totalPrice(newProds);
	}

	function deleteProduct(idProd) {
		// console.log(idProd);
		const newProds = [...state.products].filter((prod) => prod.id !== idProd);
		//
		// console.log(newProds);
		setState({ products: newProds });
		totalPrice(newProds);
	}

	const tableStuct = state.products.map((product, i) => {
		const { id, title, price, current } = product;

		return (
			<tr key={id}>
				<th className="table__td">{title}</th>
				<th className="table__td">{price}</th>
				<th className="table__td">
					{
						<Counter
							min={0}
							max={10}
							countDef={current}
							onChange={(count) => setCount(count, i)}
						/>
					}
				</th>
				<th className="table__td">{price * current}</th>
				<th className="table__td">
					<button type="button" onClick={() => (deleteProduct(id))}>Delete</button>
				</th>
			</tr>
		);
	});

	function totalPrice(newProds) {
		const total = newProds.reduce((sum, { price, current }) => sum += price * current, 0);

		setTotal(total);
	}

	function showModal() {

	}

	return (
		<>
			<table className="table">
				<thead className="table__head">
					<tr>
						<th className="table__th">Title</th>
						<th className="table__th">Price</th>
						<th className="table__th">Count</th>
						<th className="table__th">Total</th>
						<th className="table__th">Delete</th>
					</tr>
				</thead>
				<tbody className="table__body">
					{tableStuct}
				</tbody>
			</table>
			<div className="total">
				<span>Total:</span>
				<span>{total}</span>
			</div>
			<div className="show-modal">
				<button className="show-modal__btn" type="button" onClick={() => (showModal)}>Send</button>
			</div>
		</>
	);
}

export default Table;
