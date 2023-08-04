import { ConfirmationDialog } from '../../components/ConfirmationDialog';

interface ComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeleteGroup({ isOpen, onClose }: ComponentProps) {
  return (
    <ConfirmationDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Really delete group?"
      description="This action cannot be undone!"
      onConfirm={() => console.log('delete group')}
    />
  );
}
