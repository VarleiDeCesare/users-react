import React, { useEffect, useState } from 'react';
import {
	IconButton,
	Flex,
	Table,
	Heading,
	Thead,
	Tr,
	Th,
	Tbody,
	Spinner,
	useDisclosure,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import Item from './Item';
import UserModal from '../components/UserModal';
import Aside from '../../../components/Aside';

const List: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [loading, setLoading] = useState(false);
	const [userToEdit, setUserToEdit] = useState<any | null>(null);

	const users = [
		{
			id: '1',
			name: 'joao das neves',
			cpf: '04075467074',
			email: 'joao.flores@corebiz.ag',
		},
		{
			id: '2',
			name: 'joao das flores',
			cpf: '04075467074',
			email: 'joao.flores@corebiz.ag',
		},
		{
			id: '3',
			name: 'fejao',
			cpf: '04075467074',
			email: 'joao.flores@corebiz.ag',
		},
	];

	useEffect(() => {
		//setar users aqui
	}, []);

	return (
		<Flex flexDir="column" w="100%" h="100vh" p={8} overflow="auto">
			<Heading mb="48px">
				Usuários
				<IconButton
					ml="4"
					aria-label="create_user"
					rounded="md"
					icon={<FaPlus />}
					colorScheme="teal"
					onClick={() => onOpen()}
				/>
			</Heading>
			<Flex
				position="relative"
				flexDir="column"
				bg="gray.100"
				p={8}
				borderRadius={6}
				boxShadow="lg"
			>
				<Table variant="simple" colorScheme="blackAlpha">
					<Thead>
						<Tr>
							<Th>E-mail</Th>
							<Th>Nome</Th>
							<Th>CPF</Th>
							<Th>Ações</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users.map(user => (
							<Item
								key={user.id}
								user={user}
								onEditClick={(data: any) => {
									setUserToEdit(data);
									onOpen();
								}}
							/>
						))}
					</Tbody>
				</Table>
				{/* <Pagination
          ml="auto"
          mt={6}
          disabled={loading}
          total={total}
          current={page}
          perPage={per_page}
          onPageChange={p => {
            setPage(p);
          }}
        /> */}
				{loading && (
					<Flex
						position="absolute"
						align="center"
						justify="center"
						top="50%"
						left="50%"
					>
						<Spinner color="brand.500" size="xl" />
					</Flex>
				)}
				<UserModal
					isOpen={isOpen}
					userToEdit={userToEdit}
					onClose={() => {
						onClose();
						setUserToEdit(null);
					}}
				/>
			</Flex>
		</Flex>
	);
};

export default List;
