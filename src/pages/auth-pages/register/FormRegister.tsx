import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { FormRegisterProps, IFormInput } from '../types';

const FormRegister: FC<FormRegisterProps> = ({ handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleClick(data.name, data.email, data.password);
  };

  return (
    <form
      className='max-w-md mx-auto mt-20 mb-28 p-8 bg-white rounded-lg shadow-lg'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='capitalize text-2xl font-semibold text-center mb-6'>
        <FormattedMessage id='sign_up' />
      </h2>
      <div className='mb-6'>
        <label htmlFor='name' className='capitalize block text-gray-700 font-medium mb-2'>
          <FormattedMessage id='name' />
        </label>
        <input
          className='w-full p-2 text-lg rounded'
          type='text'
          placeholder='name'
          {...register('name', {
            required: 'nameRequiredMessage',
            pattern: {
              value: /^([А-ЯЁ][а-яё]{1,15}|[A-Z][a-z]{1,15})$/,
              message: 'nameMessage',
            },
          })}
        />
        {errors.name && (
          <p className='text-red-500 text-sm mt-1'>
            <FormattedMessage id={errors.name?.message as string} />
          </p>
        )}
      </div>
      <div className='mb-6'>
        <label htmlFor='email' className='capitalize block text-gray-700 font-medium mb-2'>
          <FormattedMessage id='email' />
        </label>
        <input
          className='w-full p-2 text-lg rounded'
          type='text'
          placeholder='email'
          {...register('email', {
            required: 'emailRequiredMessage',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'emailMessage',
            },
          })}
        />
        {errors.email && (
          <p className='text-red-500 text-sm mt-1'>
            <FormattedMessage id={errors.email?.message as string} />
          </p>
        )}
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='capitalize block text-gray-700 font-medium mb-2'>
          <FormattedMessage id='password' />
        </label>
        <input
          className='w-full p-2 text-lg rounded'
          type='password'
          placeholder='password'
          {...register('password', {
            required: 'passwordRequiredMessage',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: 'passwordMessage',
            },
          })}
        />
        {errors.password && (
          <p className='text-red-500 text-sm mt-1'>
            <FormattedMessage id={errors.password?.message as string} />
          </p>
        )}
      </div>
      <button
        type='submit'
        className='capitalize text-xl w-full py-2 px-4 text-white font-light bg-purple-400 hover:bg-purple-500 rounded-lg shadow-lg'
      >
        {<FormattedMessage id='sign_up' />}
      </button>
      <p className='mt-4'>
        <FormattedMessage id='have_an_account' />{' '}
        <Link to='/login' className='capitalize text-blue-500'>
          <FormattedMessage id='sign_in' />
        </Link>
      </p>
    </form>
  );
};

export { FormRegister };
