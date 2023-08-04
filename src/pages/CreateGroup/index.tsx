import { Breadcrumbs } from '../../components';
import { Typography, TextField, Button, Stack, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function CreateGroup() {
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data: any) => console.log(data);
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
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Stack>
      </form>
    </>
  );
}
