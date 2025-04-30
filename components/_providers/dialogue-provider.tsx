import React, { createContext, useContext, useState } from "react";

interface DialogState {
  [key: string]: {
    isOpen: boolean;
    data?: any; // Dados associados ao diálogo
  };
}

interface DialogContextProps {
  openDialog: (dialogKey: string, data?: any) => void;
  closeDialog: (dialogKey: string) => void;
  isDialogOpen: (dialogKey: string) => boolean;
  getDialogData: (dialogKey: string) => any; // Recuperar os dados do diálogo
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dialogs, setDialogs] = useState<DialogState>({});

  const openDialog = (dialogKey: string, data: any = null) => {
    setDialogs((prev) => ({
      ...prev,
      [dialogKey]: { isOpen: true, data },
    }));
  };

  const closeDialog = (dialogKey: string) => {
    setDialogs((prev) => ({
      ...prev,
      [dialogKey]: { isOpen: false, data: undefined },
    }));
  };

  const isDialogOpen = (dialogKey: string) => {
    return dialogs[dialogKey]?.isOpen || false;
  };

  const getDialogData = (dialogKey: string) => {
    return dialogs[dialogKey]?.data;
  };

  return (
    <DialogContext.Provider
      value={{ openDialog, closeDialog, isDialogOpen, getDialogData }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogueProvider");
  }
  return context;
};
