import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'


interface AddRtpiDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddRtpiDialog: React.FC<AddRtpiDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Adicionar RTPI</DialogTitle>
        <DialogDescription>
          Formulário para adicionar um novo RTPI.
        </DialogDescription>
        {/* Adicione o formulário aqui */}
      </DialogContent>
    </Dialog>
  );
};

export default AddRtpiDialog;
