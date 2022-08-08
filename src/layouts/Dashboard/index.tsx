import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';

type Props = {
	children?: React.ReactNode;
};

const Dashboard: React.FC<Props> = ({ children }) => {
	const headerSize = 55;
	return (
		<Flex>
			<Aside />
			<Flex flexDir="column" flex={1}>
				<Header headerSize={headerSize} />
				<Flex
					bg="gray.200"
					style={{
						height: `calc(100vh - ${headerSize}px)`,
					}}
				>
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
