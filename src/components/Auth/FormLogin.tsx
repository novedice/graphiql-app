import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

interface FormProps {
  handleClick: (email: string, password: string) => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const FormLogin: FC<FormProps> = ({ handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleClick(data.email, data.password);
  };

  return (
    <form className='m-6 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='w-56 p-2 text-lg rounded-sm'
        type='text'
        {...register('email', {
          required: 'Please enter the email',
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: <FormattedMessage id='emailMessage' />,
          },
        })}
        placeholder='email'
      />
      {errors.email && <p className='mt-2 text-red-500'>{errors.email?.message as string}</p>}
      <input
        className='w-56 mt-6 p-2 text-lg rounded-sm'
        type='password'
        {...register('password', {
          required: 'Please enter the password',
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message: <FormattedMessage id='passwordMessage' />,
          },
        })}
        placeholder='password'
      />
      {errors.password && <p className='mt-2 text-red-500'>{errors.password?.message as string}</p>}
      <button
        type='submit'
        className='w-32 mt-10 capitalize block text-xl px-4 py-2 text-gray-700  mr-2 bg-yellow-300 hover:bg-yellow-400 rounded cursor-pointer'
      >
        {<FormattedMessage id='sign_in' />}
      </button>
    </form>
  );
};

export { FormLogin };
