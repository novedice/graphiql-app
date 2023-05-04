import { useTypeSelector } from "./redux-hooks";

export function useAuth() {
  const {email, token, id} = useTypeSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}