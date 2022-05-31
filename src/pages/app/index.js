import React from 'react';
import { observer } from 'mobx-react';
import routerStore from '~s/router.store';
import styles from './app.module.styl';

const App = observer(() => {
	const {
		app
	} = styles;

	return (
		<div className={ app }>
			{ routerStore.component }
		</div>
	);
});

export default App;
