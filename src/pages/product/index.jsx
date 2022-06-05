import React from 'react';
import { Link, useParams } from 'react-router-dom';
import productsStore from '~s/products.store';
import { route } from '~/routes';
import styles from './product.module.styl';

function Product() {
	const { id: idProduct } = useParams();
	const {
		product,
		wrap,
		pictureSt,
		info,
		titleSt,
		img,
		descriptionSt,
		priceSt,
		btns,
		btnBuy,
		btnCart
	} = styles;
	const [ { id, title, picture, description, price } = {} ] = productsStore.products.filter(({ id }) => id === +idProduct);

	return (
		<div className={ product }>
			<div className={ wrap }>
				<picture className={ pictureSt }>
					<img className={ img } src={ picture }/>
				</picture>
				<div className={ info }>
					<h3 className={ titleSt }>{ title }</h3>
					<p className={ descriptionSt }>{ description }</p>
					<span className={ priceSt }>Price: { price }$</span>
					<div className={ btns }>
						<button className={ btnBuy } data-id={ id } type='text'>Buy</button>
						<Link className={ btnCart } to={ route.cart }>View in cart</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
