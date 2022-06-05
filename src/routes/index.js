import React from 'react';
import Cart from '~p/cart';
import Checkout from '~p/checkout';
import Result from '~p/result';

const routes = [
	{
		name: 'cart',
		url: '/',
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
	}
];

export const route = routes.reduce((obj, route) => {
	obj[route.name] = route.url;

	return obj;
}, {});

export default routes;
