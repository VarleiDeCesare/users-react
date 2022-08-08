import {
  FormControl,
  FormLabel,
  InputProps,
  Input as ChakraInput,
  FormErrorMessage,
  InputGroup,
  InputRightElement as ChakraInputRightElement,
  InputLeftElement as ChakraInputLeftElement,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface IProps extends InputProps {
  name: string;
  label?: string;
  error?: FieldError;
  isRequired?: boolean;
  InputLeftElement?: any;
  InputRightElement?: any;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  {
    label,
    name,
    error = null,
    isRequired,
    InputRightElement,
    InputLeftElement,
    mb,
    mt,
    ...rest
  },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired} mb={mb} mt={mt}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        {!!InputLeftElement && (
          <ChakraInputLeftElement>{InputLeftElement}</ChakraInputLeftElement>
        )}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="brand.500"
          bgColor="gray.100"
          variant="filled"
          _hover={{ borderColor: 'brand.500' }}
          size="md"
          ref={ref}
          {...rest}
        />
        {!!InputRightElement && (
          <ChakraInputRightElement>{InputRightElement}</ChakraInputRightElement>
        )}
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default forwardRef(Input);
