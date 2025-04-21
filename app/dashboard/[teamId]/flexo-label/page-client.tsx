"use client";

import React from "react";
import {
  DialogProvider,
  useDialog,
} from "../../../../components/_providers/dialogue-provider";
import MenuFlexoLabel from "@/components/flexo-label/client/menu-flexo-label";
import { FlexoLabelEnum } from "@/lib/applications/enums/flexo-label/flexo-label.enums";
import AddFlexoLabelDialog from "@/components/flexo-label/client/add-flexo-label-dialog";

function PageClient() {
  return (
    <DialogProvider>
      <MenuFlexoLabel />
      <Dialogs />
    </DialogProvider>
  );
}

const Dialogs = () => {
  const { isDialogOpen, closeDialog } = useDialog();

  return (
    <>
      <AddFlexoLabelDialog
        isOpen={isDialogOpen(FlexoLabelEnum.ADD_FLEXO_LABEL_DIALOG)}
        onClose={() => closeDialog(FlexoLabelEnum.ADD_FLEXO_LABEL_DIALOG)}
      />
      {/* Adicione outros diálogos aqui */}
    </>
  );
};

export default PageClient;
