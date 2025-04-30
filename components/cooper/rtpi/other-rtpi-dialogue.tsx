import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'


interface AddRtpiDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const OtherRtpiDialog: React.FC<AddRtpiDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl min-h-fit max-h-[80%]">
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
