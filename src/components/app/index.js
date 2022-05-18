import React from 'react';
import Cart from '~c/cart';
import Checkout from '~c/checkout';
import Result from '~c/result';
import styles from './app.module.styl';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			statusPage: 'cart'
		};
		this.component = '';
	}

	render() {
		const {
			app
		} = styles;

		switch(this.state.statusPage) {
			case 'cart':
				this.component = <Cart
					onClick={ (status) => ( this.setState({ statusPage: status }) ) }
				/>
				break;
			case 'checkout':
				this.component = <Checkout
					onClick={ (status) => ( this.setState({ statusPage: status }) ) }
				/>
				break;
			case 'result':
				this.component = <Result />
				break;
			default:
				this.component = <p>404</p>;
				break;
		}

		return (
			<div className={ app }>
				{ this.component }
			</div>
		);
	}
}

export default App;
