import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosClient } from '../../services';
import { enqueueSnackbar } from 'notistack';
import { GroupForm } from '../../types/Groups';

export function useCreateGroup({ successCallback }: { successCallback?: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (group: GroupForm) => axiosClient.post('/api/group', group).then((res) => res.data),
    onSuccess: () => {
      enqueueSnackbar('Group created', { variant: 'success' });
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      successCallback?.();
    },
    onError: () => {
      enqueueSnackbar('Group creation failed', { variant: 'error' });
    },
  });
}
