import React, { useState, useRef } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IconButton, Text, Box, Tr, Td, HStack } from '@chakra-ui/react';

interface Props {
	user: any;
	onEditClick?: (user: any) => void;
}

const Item: React.FC<Props> = ({ user, onEditClick }) => {
	const cancelRef = useRef<HTMLButtonElement | any>();

	const [loading, setLoading] = useState(false);

	const [userToEdit, setUserToEdit] = useState<any | null>(null);

	function handleDeleteUser() {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			document.location.reload();
		}, 2000);
	}
	return (
		<>
			<Tr>
				<Td>
					<Box>
						<Text>{user?.email}</Text>
					</Box>
				</Td>
				<Td>
					<Box>
						<Text>{user?.name}</Text>
					</Box>
				</Td>
				<Td>
					<Box>
						<Text>
							{user.cpf
								? user.cpf.replace(
										/(^\d{3})(\d{3})(\d{3})(\d{2}$)/,
										'$1.$2.$3-$4'
								  )
								: '-'}
						</Text>
					</Box>
				</Td>
				<Td>
					<HStack spacing={3}>
						<IconButton
							aria-label="edit-user"
							rounded="md"
							icon={<FaPen size={13} />}
							size="xs"
							colorScheme="green"
							isLoading={loading}
							onClick={() => {
								if (onEditClick) {
									onEditClick(user);
								}
							}}
						/>
						<IconButton
							aria-label="delete-user"
							rounded="md"
							icon={<FaTrash size={13} />}
							size="xs"
							colorScheme="red"
							isLoading={loading}
						/>
					</HStack>
				</Td>
			</Tr>
		</>
	);
};

export default Item;
