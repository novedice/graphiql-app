import { FC, useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (name: string, email: string, password: string) => void;
}

const FormRegister: FC<FormProps> = ({ title, handleClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='m-6 flex flex-col'>
      <input
        className='mb-6 w-56 p-2 rounded-sm'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='name'
      />
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
      <button onClick={() => handleClick(name, email, password)}>{title}</button>
    </div>
  );
};

export { FormRegister };
