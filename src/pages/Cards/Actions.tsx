import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RowActionsMenu } from '../../components/RowActionsMenu';
import { DeleteCard } from './DeleteCard';

interface ComponentProps {
  row: {
    id: string;
    name: string;
    description: string;
    owner: string;
  };
}

export function Actions({ row }: ComponentProps) {
  const navigate = useNavigate();
  const params = useParams();
  const groupId = params?.groupId;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <RowActionsMenu
        options={[
          { name: 'Edit', action: () => navigate(`/groups/${groupId}/cards/${row.id}/edit`) },
          { name: 'Delete', action: () => setModalOpen(true) },
        ]}
      />
      <DeleteCard isOpen={modalOpen} onClose={() => setModalOpen(false)} cardId={row.id} groupId={groupId} />
    </div>
  );
}
