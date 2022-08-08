import React from 'react';
import { Flex, LinkBox, LinkOverlay, Icon, Text, Box } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';

interface Props {
	title: string;
	icon: IconType;
	to: string;
}

const NavItem: React.FC<Props> = ({ icon, title, to }) => {
	const active = window.location.pathname === to;

	const transition =
		'opacity .3s cubic-bezier(.645,.045,.355,1),margin .3s,color .3s';

	return (
		<LinkBox
			w="100%"
			role="group"
			bg={active ? 'brand.100' : 'transparent'}
			transition={transition}
		>
			<Link to={to}>
				<Flex position="relative" align="center" h="40px">
					{active && (
						<Box
							position="absolute"
							left={0}
							w="4px"
							bg="brand.800"
							h="100%"
							borderTopRightRadius="4px"
							borderBottomRightRadius="4px"
						/>
					)}
					<Icon
						as={icon}
						w="20px"
						h="20px"
						mr="8px"
						ml="16px"
						color={active ? 'brand.500' : 'gray.800'}
						transition={transition}
						_groupHover={{ color: 'brand.500' }}
					/>
					<Text
						fontSize="sm"
						color={active ? 'brand.500' : 'gray.800'}
						transition={transition}
						_groupHover={{ color: 'brand.500' }}
					>
						<LinkOverlay>{title}</LinkOverlay>
					</Text>
				</Flex>
			</Link>
		</LinkBox>
	);
};

export default NavItem;
