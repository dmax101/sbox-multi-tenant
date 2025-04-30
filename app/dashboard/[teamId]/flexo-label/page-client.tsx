"use client";
import {
  DialogProvider,
  useDialog,
} from "../../../../components/_providers/dialogue-provider";
import MenuFlexoLabel from "@/components/flexo-label/client/menu-flexo-label";
import { FlexoLabelEnum } from "@/lib/applications/enums/flexo-label/flexo-label.enums";
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
import FlxLbAddEditClientDialog from "@/components/flexo-label/client/add-edit-client-dialog";

export interface PageClientProps {
  data: {
    clients: Client[];
  };
}

function PageClient({ data }: Readonly<PageClientProps>) {
  const columns: ColumnDef<Client>[] = [
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
      cell: ({ row }) => renderCreatedAtCell(row),
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => renderUpdatedAtCell(row),
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => renderActionsCell(row),
    },
  ];

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

function renderCreatedAtCell(row: any) {
  return <CreatedAtCell value={row.getValue("createdAt")} />;
}

function renderUpdatedAtCell(row: any) {
  return <UpdatedAtCell value={row.getValue("updatedAt")} />;
}

function renderActionsCell(row: any) {
  return <ActionsCell row={row} />;
}

function CreatedAtCell({ value }: Readonly<{ value: string }>) {
  return <div>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</div>;
}

function UpdatedAtCell({ value }: Readonly<{ value: string }>) {
  return <div>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</div>;
}

function ActionsCell({ row }: Readonly<{ row: any }>) {
  const { openDialog } = useDialog();

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
          Copy client ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            openDialog(FlexoLabelEnum.FLX_LB_ADD_EDIT_CLIENT_DIALOG, {
              id: row.getValue("id"),
              name: row.getValue("name"),
              identification: row.getValue("identification"),
              type: row.getValue("type"),
              createdAt: row.getValue("createdAt"),
              updatedAt: row.getValue("updatedAt"),
            })
          }
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Dialogs = () => {
  return (
    <>
      <FlxLbAddEditClientDialog />
      {/* Adicione outros diálogos aqui */}
    </>
  );
};

export default PageClient;
