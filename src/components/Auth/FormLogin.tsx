import { FC, useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const FormLogin: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='m-6 flex flex-col'>
      <input
        className='mb-6 w-56 p-2 text-lg rounded-sm'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        className='w-56 p-2 text-lg rounded-sm'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <button
        className='w-32 mt-10 capitalize block text-xl px-4 py-2 text-gray-700  mr-2 bg-yellow-300 hover:bg-yellow-400 rounded'
        onClick={() => handleClick(email, password)}
      >
        {title}
      </button>
    </div>
  );
};

export { FormLogin };
