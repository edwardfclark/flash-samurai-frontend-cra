import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useGetGroup } from '../../hooks/Group/useGetGroup';
import { GroupUpdateForm } from './GroupUpdateForm';

export function GroupUpdate() {
  const params = useParams();
  const groupId = params?.groupId;
  const { data: group, isLoading } = useGetGroup({ groupId });
  console.log(group);
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { name: 'Card Groups', path: '/' },
          { name: 'Update Card Group', path: `/groups/${groupId}/edit` },
        ]}
      />
      <Typography variant="h2" sx={{ margin: '0 0 2rem' }}>
        Update Card Group
      </Typography>
      <GroupUpdateForm defaultValues={group} groupId={groupId} />
    </>
  );
}
