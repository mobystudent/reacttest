import React from 'react';
import { Link } from 'react-router-dom';
import { route } from '~/routes';
import styles from './404.module.styl';

function Error() {
	const {
		error,
		title,
		text,
		linkWrap,
		smallText,
		btn
	} = styles;

	return (
		<div className={ error }>
			<h1 className={ title }>404</h1>
			<p className={ text }>Page not found</p>
			<div className={ linkWrap }>
				<span className={ smallText }>Return to</span>
				<Link className={ btn } to={ route.cart }>Cart</Link>
			</div>
		</div>
	);
}

export default Error;
