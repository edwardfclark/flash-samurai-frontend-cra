import { ConfirmationDialog } from '../../components/ConfirmationDialog';
import { useDeleteCard } from '../../hooks/Card/useDeleteCard';

interface ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  groupId?: string;
  cardId: string;
}

export function DeleteCard({ isOpen, onClose, groupId, cardId }: ComponentProps) {
  const { mutate, isLoading } = useDeleteCard({ groupId, successCallback: onClose, cardId });
  return (
    <ConfirmationDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Really delete card?"
      description="This action cannot be undone!"
      onConfirm={() => mutate()}
      isLoading={isLoading}
    />
  );
}
