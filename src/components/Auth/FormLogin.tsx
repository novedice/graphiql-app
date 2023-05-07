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
        className='mb-6 w-56 p-2 rounded-sm'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        className='w-56 p-2 rounded-sm'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};

export { FormLogin };
