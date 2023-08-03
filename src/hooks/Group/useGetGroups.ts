import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../../services';

export interface Group {
  _id: string;
  name: string;
  description?: string;
  owner: string;
}

export function useGetGroups({ page = 1, limit = 20 }) {
  return useQuery({
    queryKey: ['groups', { page, limit }],
    queryFn: () => axiosClient.get('/api/group', { params: { page, limit } }).then((res) => res.data),
  });
}
