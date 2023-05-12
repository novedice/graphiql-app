import { useTypeSelector } from './redux-hooks';

export function useAuth() {
  const { name, email, token, id } = useTypeSelector((state) => state.user);

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
}
