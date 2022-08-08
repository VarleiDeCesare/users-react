import React from 'react';
import { Flex, HStack, IconButton } from '@chakra-ui/react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
//import useAuth from '../../hooks/useAuth';

interface Props {
	headerSize: number;
}

const Header: React.FC<Props> = ({ headerSize }) => {
	//const { signOut } = useAuth();
	const navigate = useNavigate();

	return (
		<Flex
			as="header"
			bg="gray.100"
			align="center"
			zIndex={10}
			h={headerSize}
			p="20px"
			boxShadow="md"
		>
			<HStack spacing={2} ml="auto">
				<IconButton
					aria-label="add-banner"
					alignItems="center"
					justifyContent="center"
					onClick={() => {
						//signOut();
						navigate('/auth');
					}}
					icon={<AiOutlineLogout size={20} />}
				/>
			</HStack>
		</Flex>
	);
};

export default Header;
