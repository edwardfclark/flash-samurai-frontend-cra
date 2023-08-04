import { Route } from 'react-router-dom';
import { Breadcrumbs } from '../../components';

export function CreateGroup() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { name: 'Groups', path: '/' },
          { name: 'Create Group', path: '/groups/create' },
        ]}
      />
      <p>Create Group</p>
    </>
  );
}
