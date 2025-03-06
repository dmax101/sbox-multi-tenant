"use client";

import AddRtpiDialog from "@/components/cooper/rtpi/add-rtpi-dialogue";
import { DataTableDemo } from "@/components/cooper/rtpi/datatable-example";
import MenuRtpi from "@/components/cooper/rtpi/menu-rtpi";
import React from "react";
import { DialogProvider, useDialog } from "../../../../components/_providers/dialogue-provider";
import OtherRtpiDialog from "@/components/cooper/rtpi/other-rtpi-dialogue";
import { CooperDialogEnum } from "@/lib/applications/enums/cooper/cooper.enums";

function PageClient() {
  return (
    <DialogProvider>
      <MenuRtpi />
      <Dialogs />
      <DataTableDemo />
    </DialogProvider>
  );
}

const Dialogs = () => {
  const { isDialogOpen, closeDialog } = useDialog();

  return (
    <>
      <AddRtpiDialog
        isOpen={isDialogOpen(CooperDialogEnum.ADD_RTPI_DIALOG)}
        onClose={() => closeDialog(CooperDialogEnum.ADD_RTPI_DIALOG)}
      />
      <OtherRtpiDialog
      isOpen={isDialogOpen(CooperDialogEnum.OTHER_RTPI_DIALOG)}
      onClose={() => closeDialog(CooperDialogEnum.OTHER_RTPI_DIALOG)}
      />
      {/* Adicione outros diálogos aqui */}
    </>
  );
};

export default PageClient;
