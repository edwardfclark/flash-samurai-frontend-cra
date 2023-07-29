import Cookies from 'universal-cookie';
export function useAuth() {
  const cookies = new Cookies();
  const token = cookies.get('token');
  return {
    token,
  };
}
