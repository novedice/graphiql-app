import { InputFieldProps } from '../types';

const InputField = ({ fieldName, value, register }: InputFieldProps) => {
  return (
    <>
      <input
        className='w-full p-2 text-lg border-gray-700 rounded'
        type={fieldName === 'password' ? 'password' : 'text'}
        placeholder={fieldName}
        {...register(fieldName, {
          required: `${fieldName}RequiredMessage`,
          pattern: {
            value: value,
            message: `${fieldName}Message`,
          },
        })}
      />
    </>
  );
};

export default InputField;
