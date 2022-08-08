import React, { useState } from 'react';
import { Flex, Box, VStack, Image, Divider } from '@chakra-ui/react';
import { MdSettings, MdList } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import NavItem from './NavItem';
import NavSkeleton from './NavSkeleton';
// import logo from '../../assets/logo.png';

const Aside: React.FC = () => {
	const [loading, setLoading] = useState(false);

	return (
		<Flex
			py="20px"
			h="100vh"
			as="aside"
			flexDir="column"
			w={225}
			bg="gray.100"
			zIndex={20}
			boxShadow="2xl"
		>
			{/* <Box px="20px" mb={6}>
				<Image src={logo} mb="16px" />
				<Divider />
			</Box> */}
			<VStack as="nav" spacing={2}>
				{loading ? (
					<NavSkeleton />
				) : (
					<>
						<NavItem icon={FiUsers} title="Usuários" to="/users" />
						<NavItem icon={MdList} title="Home" to="/home" />
						<NavItem icon={MdSettings} title="Sobre" to="/about" />
					</>
				)}
			</VStack>
		</Flex>
	);
};

export default Aside;
