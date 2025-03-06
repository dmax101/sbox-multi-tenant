import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'


interface AddRtpiDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const OtherRtpiDialog: React.FC<AddRtpiDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Outros RTPI</DialogTitle>
        <DialogDescription>
          Outros RTPIs forms
        </DialogDescription>
        {/* Adicione o formulário aqui */}
      </DialogContent>
    </Dialog>
  );
};

export default OtherRtpiDialog;
