import { TextField, Button, Stack, Box, Autocomplete } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ICardForm } from '../../types/Cards';
import { useGetTags } from '../../hooks/Tag/useGetTags';
import { ITag } from '../../types/Tags';

interface CardFormProps {
  defaultValues?: ICardForm;
  onCancel: () => void;
  isLoading: boolean;
  onSubmit: (data: ICardForm) => void;
  groupId?: string;
}

export function CardForm({ defaultValues, onCancel, isLoading, onSubmit: externalOnSubmit, groupId }: CardFormProps) {
  const { data: fetchedTags } = useGetTags({ groupId });
  const { handleSubmit, control, watch, setValue } = useForm<ICardForm>({ defaultValues });
  const selectedTags = watch('tags', []);
  const onSubmit: SubmitHandler<ICardForm> = (data: ICardForm) => externalOnSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          name="question"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} label="Question" sx={{ margin: '0 0 1rem' }} multiline rows={3} />
          )}
        />
        <Controller
          name="answer"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} label="Answer" sx={{ margin: '0 0 1rem' }} multiline rows={3} />}
        />
        <Controller
          name="reference"
          control={control}
          rules={{ required: false }}
          render={({ field }) => <TextField {...field} label="Reference" sx={{ margin: '0 0 1rem' }} />}
        />
        <Autocomplete
          multiple
          options={fetchedTags?.data?.map((tag: ITag) => tag.name) ?? []}
          renderInput={(params) => <TextField {...params} label="Tags" sx={{ margin: '0 0 1rem' }} />}
          value={selectedTags?.map((tag) => tag.name) ?? []}
          onChange={(e, values) => {
            const tags = fetchedTags?.data?.filter((tag: ITag) => values?.includes(tag.name)) ?? [];
            setValue('tags', tags, { shouldDirty: true });
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="outlined" onClick={onCancel}>
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
