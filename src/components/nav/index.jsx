import React from 'react';
import { Link } from 'react-router-dom';
import routes from '~/routes';
import styles from './nav.module.styl';

function Nav() {
	const {
		nav,
		list,
		item,
		link
	} = styles;

	const navList = routes.filter((linkNav) => 'name' in linkNav).map((linkNav) => {
		const { name } = linkNav;

		return (
			<li key={ name } className={ item }>
				<Link className={ link } to={ name }>{ name }</Link>
			</li>
		);
	});

	return (
		<div className={ nav }>
			<ul className={ list }>{ navList }</ul>
		</div>
	);
}

export default Nav;
