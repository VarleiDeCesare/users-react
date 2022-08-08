import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Routes } from './Routes';

const App: React.FC = () => {
	return (
		<ChakraProvider>
			<Routes />
		</ChakraProvider>
	);
};

export default App;
