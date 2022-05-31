import React from 'react';
import { observer } from 'mobx-react';
import Counter from '~c/counter';
import cartStore from '~s/cart.store';
import styles from './table.module.styl';

const Table = observer(() => {
	const {
		table,
		th,
		td,
		total
	} = styles;

	const tableStuct = cartStore.products.map((product, i) => {
		const { id, title, price, current } = product;

		return (
			<tr key={id}>
				<th className={ td }>{ title }</th>
				<th className={ td }>{ price }</th>
				<th className={ td }>
					{
						<Counter
							min={ 1 }
							max={ 10 }
							countDef={current}
							onChange={ (count) => cartStore.count(count, i) }
						/>
					}
				</th>
				<th className={ td }>{ price * current }</th>
				<th className={ td }>
					<button type="button" onClick={ () => ( cartStore.delete(id) ) }>Delete</button>
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
				<span>{ cartStore.total }</span>
			</div>
		</>
	);
});

export default Table;
