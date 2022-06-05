import React from 'react';
import Cart from '~p/cart';
import Checkout from '~p/checkout';
import Result from '~p/result';
import Products from '~p/products';
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
		url: '/',
		component: <Products />
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

export default routes;
