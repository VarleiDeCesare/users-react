import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  useTheme,
} from '@chakra-ui/react';
import { Control, Controller, FieldError, FieldValues } from 'react-hook-form';
import ReactSelect, { Props as SelectProps, StylesConfig } from 'react-select';

interface IProps extends SelectProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  control?: Control<FieldValues, object>;
  label?: string;
  error?: FieldError;
  isRequired?: boolean;
  backgroundColorIntensity?: string;
}

export interface ISelectValue {
  label: string;
  value: string;
}

const Select: React.FC<IProps> = ({
  label,
  name,
  error = null,
  isRequired,
  placeholder = '',
  control,
  backgroundColorIntensity = '100',
  ...rest
}) => {
  const theme = useTheme();
  const customStyles: StylesConfig = {
    loadingIndicator: provided => ({
      ...provided,
      color: theme.colors.brand['500'],
    }),
    container: provided => ({
      ...provided,
      width: '100%',
    }),
    control: (provided, state) => {
      let borderColor = 'transparent';

      if (error) {
        borderColor = theme.colors.red['500'];
      }

      if (state.isFocused) {
        borderColor = theme.colors.brand['500'];
      }

      return {
        ...provided,
        backgroundColor: theme.colors.gray[backgroundColorIntensity],
        borderWidth: 2,
        borderColor,
        boxShadow: '0',
        height: theme.sizes['11'],
        '&:hover': {
          borderColor: theme.colors.brand['500'],
        },
      };
    },
    menu: provided => ({
      ...provided,
      backgroundColor: theme.colors.gray['100'],
      boxShadow: `0 0 0 0.02rem ${theme.colors.gray['50']}`,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? theme.colors.brand['600']
        : 'transparent',
      '&:hover': {
        backgroundColor: theme.colors.brand['500'],
      },
    }),
    multiValue: provided => ({
      ...provided,
      backgroundColor: theme.colors.brand['500'],
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: provided => ({
      ...provided,
      '$:hover': {
        backgroundColor: theme.colors.gray['300'],
      },
    }),
  };

  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <ReactSelect
              id={name}
              placeholder={placeholder}
              styles={customStyles}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              loadingMessage={() => 'Carregando...'}
              noOptionsMessage={() => 'Nada encontrado'}
              {...rest}
            />
          )}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default Select;
