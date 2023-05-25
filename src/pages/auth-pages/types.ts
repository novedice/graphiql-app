import { UseFormRegister } from 'react-hook-form';

interface FormRegisterProps {
  handleClick: (name: string, email: string, password: string) => void;
}

interface FormLoginProps {
  handleClick: (email: string, password: string) => void;
}

interface IFormLogin {
  email: string;
  password: string;
}

interface IFormInput extends IFormLogin {
  name: string;
}

interface InputFieldProps {
  fieldName: 'name' | 'email' | 'password';
  value: RegExp;
  register: UseFormRegister<IFormInput>;
}

export type { FormRegisterProps, FormLoginProps, IFormLogin, IFormInput, InputFieldProps };
