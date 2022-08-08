import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import About from '../modules/About';
import { Home } from '../modules/Home';
import { User } from '../modules/User';
import CustomRoute from './CustomRoute';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					element={<CustomRoute component={Home} isDashboard />}
					path="/home"
				/>
				<Route
					element={<CustomRoute component={About} isDashboard />}
					path="/about"
				/>
				<Route
					element={<CustomRoute component={User} isDashboard />}
					path="/users"
				/>
				<Route path="/" element={<h1>401</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export { Routes };
