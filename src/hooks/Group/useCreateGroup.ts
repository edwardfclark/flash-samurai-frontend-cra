import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosClient } from '../../services';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export interface CreateGroupForm {
  name: string;
  description?: string;
}

export function useCreateGroup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (group: CreateGroupForm) => axiosClient.post('/api/group', group).then((res) => res.data),
    onSuccess: () => {
      enqueueSnackbar('Group created', { variant: 'success' });
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      navigate('/');
    },
    onError: () => {
      enqueueSnackbar('Group creation failed', { variant: 'error' });
    },
  });
}
