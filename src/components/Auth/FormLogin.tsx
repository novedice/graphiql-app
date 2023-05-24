import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

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
    <form
      className='max-w-md mx-auto mt-20 mb-28 p-8 bg-white rounded-lg shadow-lg'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='capitalize text-2xl font-semibold text-center mb-6'>
        <FormattedMessage id='sign_in' />
      </h2>
      <div className='mb-6'>
        <label htmlFor='email' className='capitalize block text-gray-700 font-medium mb-2'>
          <FormattedMessage id='email' />
        </label>
        <input
          className='w-full p-2 text-lg rounded'
          type='text'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email',
            },
          })}
          placeholder='email'
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
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: 'Invalid password',
            },
          })}
          placeholder='password'
        />
        {errors.password && (
          <p className='text-red-500 text-sm mt-1'>
            <FormattedMessage id={errors.password?.message as string} />
          </p>
        )}
      </div>
      <button
        type='submit'
        className='normal-case text-xl w-full py-2 px-4 text-white font-light bg-green-400 hover:bg-green-500 rounded-lg shadow-lg'
      >
        <FormattedMessage id='login' />
      </button>

      <p className='mt-4'>
        <FormattedMessage id='notAMember' />{' '}
        <Link to='/register' className='capitalize text-blue-500'>
          <FormattedMessage id='register' />
        </Link>
      </p>
    </form>
  );
};

export { FormLogin };
