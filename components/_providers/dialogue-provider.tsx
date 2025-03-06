import React, { createContext, useContext, useState } from "react";

interface DialogContextType {
  openDialog: (dialogName: string) => void;
  closeDialog: (dialogName: string) => void;
  isDialogOpen: (dialogName: string) => boolean;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

interface DialogProviderProps {
  children: React.ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [openDialogs, setOpenDialogs] = useState<{ [key: string]: boolean }>(
    {}
  );

  const openDialog = (dialogName: string) => {
    setOpenDialogs((prev) => ({ ...prev, [dialogName]: true }));
  };

  const closeDialog = (dialogName: string) => {
    setOpenDialogs((prev) => ({ ...prev, [dialogName]: false }));
  };

  const isDialogOpen = (dialogName: string) => !!openDialogs[dialogName];

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, isDialogOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
