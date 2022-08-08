import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import isValidCpf from '../../../../utils/isValidCpf';
import isValidPassword from '../../../../utils/isValidPassword';
import Input from '../../../../components/Form/Input';

import {
	ModalFooter,
	HStack,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useToast,
	VStack,
	SimpleGrid,
} from '@chakra-ui/react';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	onCreated?: (user: any) => void;
	onEdited?: (user: any) => void;
	userToEdit?: null | any;
}

interface FormData {
	name: string;
	email: string;
	cpf: string;
	password?: string;
	confirmationPassword?: string;
}

const updateformData = yup.object().shape({
	name: yup.string().required('Nome é obrigatório'),
	email: yup
		.string()
		.email('Deve ser um E-mail válido')
		.required('E-mail é obrigatório'),
	cpf: yup.string().test('cpf', 'CPF é invalido', cpf => isValidCpf(cpf || '')),
});

const createFormData = yup.object().shape({
	name: yup.string().required('Nome é obrigatório'),
	email: yup
		.string()
		.email('Deve ser um E-mail válido')
		.required('E-mail é obrigatório'),
	password: yup
		.string()
		.test('password', 'Senha é obrigatório', value => {
			if (typeof value === 'undefined') return true;
			if (typeof value !== 'string' || !value) return false;
			return true;
		})
		.test(
			'password',
			'Senha deve ter mais de 8 caracteres, pelo menos uma letra minúscula e maiúscula e caracter especial',
			value => {
				if (typeof value === 'undefined') return true;
				if (typeof value !== 'string' || !value) return false;
				return isValidPassword(value);
			}
		),
	cpf: yup.string().test('cpf', 'CPF é invalido', cpf => isValidCpf(cpf || '')),
	confirmationPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
		.required('Campo obrigatório'),
});
const UserModal: React.FC<Props> = ({ isOpen, onClose, userToEdit }) => {
	const toast = useToast();
	const [rolesLoading, setRolesLoading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [roles, setRoles] = useState<any[]>([]);
	const [show, setShow] = useState(false);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: yupResolver(userToEdit ? updateformData : createFormData),
	});

	useEffect(() => {}, []);
	setValue('email', userToEdit?.email);
	setValue('name', userToEdit?.name);
	setValue('cpf', userToEdit?.cpf);
	const handleForm: SubmitHandler<FormData> = async (data: FormData) =>
		console.log('handle submit ', data);
	return (
		<Modal
			onClose={() => {
				onClose();
				reset();
			}}
			isOpen={isOpen}
			isCentered
			size="xl"
		>
			<ModalOverlay />
			<ModalContent maxH="90vh" as="form" onSubmit={handleSubmit(handleForm)}>
				<ModalHeader>
					{userToEdit ? 'Editar usuário' : 'Novo usuário'}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack spacing={8}>
						<SimpleGrid minChildWidth="200px" spacing="8" w="100%">
							<Input
								label="E-mail"
								isRequired
								{...register('email')}
								error={errors.email}
							/>
							<Input
								label="Nome"
								{...register('name')}
								isRequired
								error={errors.name}
							/>
							<Input
								label="CPF"
								{...register('cpf')}
								isRequired
								error={errors.cpf}
							/>
							{!userToEdit && (
								<>
									<Input
										{...register('password')}
										type={show ? 'text' : 'password'}
										label="Senha"
										isRequired
										error={errors.password}
									/>
									<Input
										placeholder="Repita a senha"
										type="password"
										{...register('confirmationPassword')}
										error={errors.confirmationPassword}
									/>
								</>
							)}
						</SimpleGrid>
					</VStack>
				</ModalBody>
				<ModalFooter>
					<HStack spacing={4}>
						<Button colorScheme="teal" variant="outline" onClick={onClose}>
							Fechar
						</Button>
						<Button
							colorScheme="teal"
							variant="outline"
							isLoading={loading}
							type="submit"
						>
							Salvar
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UserModal;
