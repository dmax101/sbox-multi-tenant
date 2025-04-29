"use client";

import React from "react";
import {
  DialogProvider,
  useDialog,
} from "../../../../components/_providers/dialogue-provider";
import MenuFlexoLabel from "@/components/flexo-label/client/menu-flexo-label";
import { FlexoLabelEnum } from "@/lib/applications/enums/flexo-label/flexo-label.enums";
import AddFlexoLabelDialog from "@/components/flexo-label/client/add-flexo-label-dialog";
import { Client } from "../../../../prisma/app/generated/prisma/client/index";
import { ColumnDef } from "@tanstack/react-table";
import { ClientDataTable } from "../../../../components/flexo-label/client/client-data-table";
import moment from "moment";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export interface PageClientProps {
  data: {
    clients: Client[];
  };
}

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "identification",
    header: "Identification",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const formatedDate = moment(row.getValue("createdAt")).format(
        "DD/MM/YYYY HH:mm:ss"
      );

      return <div>{formatedDate}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const formatedDate = moment(row.getValue("updatedAt")).format(
        "DD/MM/YYYY HH:mm:ss"
      );

      return <div>{formatedDate}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function PageClient({ data }: Readonly<PageClientProps>) {
  return (
    <DialogProvider>
      <MenuFlexoLabel />
      <div className="flex flex-col gap-4 py-4">
        <ClientDataTable columns={columns} data={data.clients} />
      </div>
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
