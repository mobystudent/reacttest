import React, { useState } from 'react';
import Counter from '../counter/Counter';
import styles from './table.module.styl';

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
	let [ totalCount, setTotal ] = useState(0);

	function setCount(count, i) {
		const newProds = [...state.products];
		newProds[i] = {...newProds[i], current: count};

		setState({ products: newProds });
		totalPrice(newProds);
	}

	function deleteProduct(idProd) {
		const newProds = [...state.products].filter((prod) => prod.id !== idProd);

		setState({ products: newProds });
		totalPrice(newProds);
	}

	function totalPrice(newProds) {
		const totalCount = newProds.reduce((sum, { price, current }) => sum += price * current, 0);

		setTotal(totalCount);
	}

	const {
		table,
		th,
		td,
		total
	} = styles;

	const tableStuct = state.products.map((product, i) => {
		const { id, title, price, current } = product;

		return (
			<tr key={id}>
				<th className={ td }>{title}</th>
				<th className={ td }>{price}</th>
				<th className={ td }>
					{
						<Counter
							min={0}
							max={10}
							countDef={current}
							onChange={ (count) => setCount(count, i) }
						/>
					}
				</th>
				<th className={ td }>{price * current}</th>
				<th className={ td }>
					<button type="button" onClick={ () => ( deleteProduct(id) ) }>Delete</button>
				</th>
			</tr>
		);
	});

	return (
		<>
			<table className={ table }>
				<thead className="table__head">
					<tr>
						<th className={ th }>Title</th>
						<th className={ th }>Price</th>
						<th className={ th }>Count</th>
						<th className={ th }>Total</th>
						<th className={ th }>Delete</th>
					</tr>
				</thead>
				<tbody className="table__body">
					{tableStuct}
				</tbody>
			</table>
			<div className={ total }>
				<span>Total:</span>
				<span>{ totalCount }</span>
			</div>
		</>
	);
}

export default Table;
