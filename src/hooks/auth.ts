import Cookies from 'universal-cookie';
import { useMutation } from '@tanstack/react-query';
import { axiosClient } from '../services';
import { enqueueSnackbar } from 'notistack';

interface LoginCredentials {
  username: string;
  password: string;
}

export function useAuth() {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => axiosClient.post('/api/login', credentials).then((res) => res.data),
    onSuccess: (res) => {
      const { token } = res;
      cookies.set('token', token, { path: '/' });
      enqueueSnackbar('Login successful', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar('Login failed', { variant: 'error' });
    },
  });

  return {
    token,
    login: (credentials: LoginCredentials) => loginMutation.mutate(credentials),
  };
}
