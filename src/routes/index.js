import React from 'react';
import Cart from '~p/cart';
import Checkout from '~p/checkout';
import Result from '~p/result';
import Products from '~p/products';
import Product from '~p/product';
import Error from '~p/404';

const routes = [
	{
		name: 'cart',
		url: '/cart',
		component: <Cart />
	},
	{
		name: 'checkout',
		url: '/checkout',
		component: <Checkout />
	},
	{
		name: 'result',
		url: '/result',
		component: <Result />
	},
	{
		name: 'products',
		url: '/products',
		component: <Products />
	},
	{
		name: 'product',
		url: '/product/:id',
		component: <Product />
	},
	{
		url: '/*',
		component: <Error />
	}
];

export const route = routes.reduce((obj, route) => {
	obj[route.name] = route.url;

	return obj;
}, {});

export const paramRoute = (page, params) => {
	const startIndex = page.indexOf(':');
	const getTmpParam = page.slice(startIndex);

	return page.replace(getTmpParam, params);
};

export default routes;
