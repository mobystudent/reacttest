import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
// import Nav from '~c/nav';
import { route } from '~/routes';
import cartStore from '~s/cart.store';
import styles from './header.module.styl';
import iconCart from '~i/icons/cart.svg';

const Header = observer(() => {
	const {
		header,
		link,
		icon,
		countText
	} = styles;
	const amount = cartStore.amountProducts ? <span className={ countText }>{ cartStore.amountProducts }</span> : '';

	return (
		<header className={ header }>
			<NavLink className={ link } to={ route.cart }>
				<img className={ icon } src={ iconCart }/>
				{ amount }
			</NavLink>
		</header>
	);
});

export default Header;
