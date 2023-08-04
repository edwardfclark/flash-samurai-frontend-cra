import { Breadcrumbs } from '../../components';
import { Typography, TextField, Button, Stack, Box } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateGroup, CreateGroupForm } from '../../hooks/Group/useCreateGroup';

export function CreateGroup() {
  const { handleSubmit, control } = useForm<CreateGroupForm>();
  const { mutate, isLoading } = useCreateGroup();
  const onSubmit: SubmitHandler<CreateGroupForm> = (data: CreateGroupForm) => mutate(data);
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { name: 'Card Groups', path: '/' },
          { name: 'Create Card Group', path: '/groups/create' },
        ]}
      />
      <Typography variant="h2" sx={{ margin: '0 0 2rem' }}>
        Create Card Group
      </Typography>
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
    </>
  );
}
