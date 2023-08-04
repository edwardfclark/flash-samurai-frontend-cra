import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosClient } from '../../services';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export interface UpdateGroupForm {
  name: string;
  description?: string;
}

export function useUpdateGroup({ groupId }: { groupId?: string }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (group: UpdateGroupForm) => axiosClient.put(`/api/group/${groupId}`, group).then((res) => res.data),
    onSuccess: () => {
      enqueueSnackbar('Group updated', { variant: 'success' });
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      navigate('/');
    },
    onError: () => {
      enqueueSnackbar('Group update failed', { variant: 'error' });
    },
  });
}
