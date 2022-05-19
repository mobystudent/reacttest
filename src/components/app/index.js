import React from 'react';
import Cart from '~c/cart';
import Checkout from '~c/checkout';
import Result from '~c/result';
import styles from './app.module.styl';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			statusPage: 'cart',
			formData: {
				name: {
					labelId: 'nameOrder',
					title: 'Your name',
					type: 'text',
					value: ''
				},
				phone: {
					labelId: 'phoneOrder',
					title: 'Your phone',
					type: 'text',
					value: ''
				},
				email: {
					labelId: 'emailOrder',
					title: 'Your email',
					type: 'email',
					value: ''
				}
			}
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
					formData={ this.state.formData }
					onBack={ (status) => ( this.setState({ statusPage: status }) ) }
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
