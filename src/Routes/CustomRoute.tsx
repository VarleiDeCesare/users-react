import { ComponentType, FC } from 'react';
import { RouteProps } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';

interface ExtendedRouteProps extends RouteProps {
	isPrivate?: boolean;
	isDashboard?: boolean;
	component: ComponentType;
}

const PrivateRoute: FC<ExtendedRouteProps> = ({
	isPrivate = false,
	isDashboard,
	component: Component,
	...rest
}) => {
	const render = () => {
		if (isDashboard) {
			return (
				<Dashboard>
					<Component />
				</Dashboard>
			);
		}

		return <Component />;
	};

	return render();
};

export default PrivateRoute;
