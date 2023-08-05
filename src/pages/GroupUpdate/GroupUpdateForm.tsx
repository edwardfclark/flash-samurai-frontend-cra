import { TextField, Button, Stack, Box } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UpdateGroupForm, useUpdateGroup } from '../../hooks/Group/useUpdateGroup';

export function GroupUpdateForm({ defaultValues, groupId }: { defaultValues: UpdateGroupForm; groupId?: string }) {
  const { handleSubmit, control } = useForm<UpdateGroupForm>({ defaultValues });
  const navigate = useNavigate();
  const { mutate, isLoading } = useUpdateGroup({
    groupId,
    successCallback: () => {
      navigate('/');
    },
  });

  const onSubmit: SubmitHandler<UpdateGroupForm> = (data: UpdateGroupForm) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} label="Name" sx={{ margin: '0 0 1rem' }} />}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <TextField {...field} label="Description" sx={{ margin: '0 0 1rem' }} multiline rows={3} />
          )}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="outlined" onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  );
}
