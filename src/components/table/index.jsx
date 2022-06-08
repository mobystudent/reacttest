import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import Counter from '~c/counter';
import cartStore from '~s/cart.store';
import productsStore from '~s/products.store';
import styles from './table.module.styl';

const Table = observer(() => {
	const {
		table,
		th,
		td,
		thMin,
		tdMin,
		total,
		btn
	} = styles;

	const checkedProducts = cartStore.products.map(({ id }) => productsStore.products.filter((product) => id === product.id)).flat();
	const tableStuct = useMemo(() => {
		return checkedProducts.map((product, i) => {
			const { id, title, price, rest } = product;

			return (
				<tr key={id}>
					<th className={ `${td} ${tdMin}` }>{ i + 1 }</th>
					<th className={ td }>{ title }</th>
					<th className={ td }>{ price }</th>
					<th className={ td }>
						{
							<Counter
								min={ 1 }
								max={ rest }
								defaultCount={ cartStore.countItem(id) }
								onChange={ (count) => cartStore.count(count, i) }
							/>
						}
					</th>
					<th className={ td }>{ cartStore.totalItem(id) }</th>
					<th className={ td }>
						<button className={ btn } type="button" onClick={ () => ( cartStore.delete(id) ) }>Delete</button>
					</th>
				</tr>
			);
		});
	}, [btn, td, tdMin, checkedProducts]);

	return (
		<>
			<table className={ table }>
				<thead className="table__head">
					<tr>
						<th className={ `${th} ${thMin}` }>#</th>
						<th className={ th }>Title</th>
						<th className={ th }>Price</th>
						<th className={ th }>Count</th>
						<th className={ th }>Total</th>
						<th className={ th }>Delete</th>
					</tr>
				</thead>
				<tbody className="table__body">
					{ tableStuct }
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
