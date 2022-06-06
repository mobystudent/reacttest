import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Table from '~c/table';
import { route } from '~/routes';
import cartStore from '~s/cart.store';
import styles from './cart.module.styl';

const Cart = observer(() => {
	const {
		cart,
		title,
		openForm,
		btn,
		img,
		block,
		text,
		link
	} = styles;

	return (
		<div className={ cart }>
			<h1 className={ title }>Cart</h1>
			{
				cartStore.products.length
					?
					<>
						<Table />
						<div className={ openForm }>
							<Link className={ btn } to={ route.checkout }>Send</Link>
						</div>
					</>
					:
					<div className={ block }>
						<img className={ img } src='../images/shop-cart.svg'/>
						<p className={ text }>
							<span>Cart is empty, go to </span>
							<Link className={ link } to={ route.products }>products page</Link>
						</p>
					</div>
			}
		</div>
	);
});

export default Cart;
