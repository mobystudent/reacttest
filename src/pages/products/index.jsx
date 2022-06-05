import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import productsStore from '~s/products.store';
import { route, paramRoute } from '~/routes';
import styles from './products.module.styl';

const Products = observer(() => {
	const {
		products,
		titleMain,
		wrap,
		productSt,
		pictureSt,
		titleSt,
		img,
		descriptionSt,
		priceSt,
		more,
		btn
	} = styles;

	const productsList = productsStore.products.map((product) => {
		const { id, title, price, picture, description } = product;

		return (
			<div className={ productSt } key={ id }>
				<picture className={ pictureSt }>
					<img className={ img } src={ picture }/>
				</picture>
				<h3 className={ titleSt }>{ title }</h3>
				<p className={ descriptionSt }>{ description }</p>
				<Link className={ more } to={ paramRoute(route.product, id) }>More...</Link>
				<span className={ priceSt }>Price: { price }</span>
				<button className={ btn } type='text'>Buy</button>
			</div>
		);
	});

	return (
		<div className={ products }>
			<h1 className={ titleMain }>Products</h1>
			<div className={ wrap }>
				{ productsList }
			</div>
		</div>
	);
});

export default Products;
