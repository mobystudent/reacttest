import React from 'react';
import { NavLink } from 'react-router-dom';
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
				<NavLink className={ link } to={ name }>{ name }</NavLink>
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
