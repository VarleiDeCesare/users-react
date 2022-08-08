import React from 'react';
import { Skeleton, SkeletonCircle, Flex, VStack } from '@chakra-ui/react';

const NavSkeleton: React.FC = () => {
	return (
		<VStack spacing={4} w="100%">
			<Flex w="100%" align="center" px="16px">
				<SkeletonCircle mr="8px" size="6" />
				<Skeleton h="10px" flex={1} />
			</Flex>
			<Flex w="100%" align="center" px="16px">
				<SkeletonCircle mr="8px" size="6" />
				<Skeleton h="10px" flex={1} />
			</Flex>
			<Flex w="100%" align="center" px="16px">
				<SkeletonCircle mr="8px" size="6" />
				<Skeleton h="10px" flex={1} />
			</Flex>
			<Flex w="100%" align="center" px="16px">
				<SkeletonCircle mr="8px" size="6" />
				<Skeleton h="10px" flex={1} />
			</Flex>
			<Flex w="100%" align="center" px="16px">
				<SkeletonCircle mr="8px" size="6" />
				<Skeleton h="10px" flex={1} />
			</Flex>
		</VStack>
	);
};

export default NavSkeleton;
