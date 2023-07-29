import Cookies from 'universal-cookie';
import { useMutation } from '@tanstack/react-query';
import { axiosClient } from '../services';

interface Credentials {
  username: string;
  password: string;
}

export function useAuth() {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const loginMutation = useMutation({
    mutationFn: async (credentials: Credentials) => {
      console.log('credentials', credentials);
      return {};
    },
    onSuccess: () => {
      console.log('success fired');
    },
  });
  return {
    token,
    login: (credentials: Credentials) => loginMutation.mutate(credentials),
  };
}
