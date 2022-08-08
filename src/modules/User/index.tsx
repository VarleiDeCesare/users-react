import React, { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import List from './pages/List';

const User: FC = () => {
	return (
		<Switch>
			<Route element={<List />} path="/" />
		</Switch>
	);
};

export { User };
