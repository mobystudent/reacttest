import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import routes from '~/routes';
import styles from './app.module.styl';

const App = observer(() => {
	const {
		app
	} = styles;

	const routesMap = routes.map((route) => {
		return <Route key={ route.url } path={ route.url } element={ route.component } />
	});

	return (
		<Router>
			<div className={ app }>
				<Routes>
					{ routesMap }
				</Routes>
			</div>
		</Router>
	);
});

export default App;
