"use client";
import { FileTextIcon } from "lucide-react";
import { GenericMenubar, Menu } from "@/components/menu-bar-generic";
import { useDialog } from "@/components/_providers/dialogue-provider";
import { FlexoLabelEnum } from "@/lib/applications/enums/flexo-label/flexo-label.enums";

function MenuFlexoLabel() {
  const { openDialog } = useDialog();

  const menus: Menu[] = [
    {
      label: "Clientes",
      icon: FileTextIcon,
      items: [
        {
          label: "Overview",
          onClick: () => console.log("Overview"),
          group: "cliente",
        },
        {
          label: "Novo",
          shortcut: "⌘N",
          onClick: () =>
            openDialog(FlexoLabelEnum.FLX_LB_ADD_EDIT_CLIENT_DIALOG),
          group: "cliente",
        },
        {
          label: "Editar",
          shortcut: "⌘E",
          onClick: () =>
            openDialog(FlexoLabelEnum.FLX_LB_ADD_EDIT_CLIENT_DIALOG, {
              id: "288ba4c8-f1c6-434e-98cb-2cf03d661250",
              name: "Danilo Ribeiro",
              identification: "12345678900",
              type: "INDIVIDUAL",
              createdAt: new Date("29/04/2025 00:54:09"),
              updatedAt: new Date("29/04/2025 00:54:09"),
            }),
          group: "cliente",
        },
      ],
    },
  ];

  return (
    <div className="menu-rtpi">
      <div>
        <GenericMenubar menus={menus} />
      </div>
    </div>
  );
}

export default MenuFlexoLabel;
