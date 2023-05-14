import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

interface FormProps {
  handleClick: (name: string, email: string, password: string) => void;
}

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const FormRegister: FC<FormProps> = ({ handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleClick(data.name, data.email, data.password);
  };

  return (
    <form className='ml-6 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='w-56 p-2 text-lg rounded-sm'
        type='text'
        placeholder='name'
        {...register('name', {
          required: 'Please enter the name',
          pattern: {
            value: /^([А-ЯЁ][а-яё]*|[A-Z][a-z]*)$/,
            message: <FormattedMessage id='nameMessage' />,
          },
        })}
      />
      {errors.name && <p className='mt-2 text-red-500'>{errors.name?.message as string}</p>}
      <input
        className='w-56 mt-6 p-2 text-lg rounded-sm'
        type='text'
        placeholder='email'
        {...register('email', {
          required: 'Please enter the email',
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: <FormattedMessage id='emailMessage' />,
          },
        })}
      />
      {errors.email && <p className='mt-2 text-red-500'>{errors.email?.message as string}</p>}
      <input
        className='w-56 mt-6 p-2 text-lg rounded-sm'
        type='password'
        placeholder='password'
        {...register('password', {
          required: 'Please enter the password',
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message: <FormattedMessage id='passwordMessage' />,
          },
        })}
      />
      {errors.password && <p className='mt-2 text-red-500'>{errors.password?.message as string}</p>}
      <button
        type='submit'
        className='w-44 mt-10 capitalize text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
      >
        {<FormattedMessage id='sign_up' />}
      </button>
    </form>
  );
};

export { FormRegister };
