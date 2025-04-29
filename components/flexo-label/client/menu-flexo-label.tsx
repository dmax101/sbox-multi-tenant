"use client";
import { FileTextIcon } from "lucide-react";
import { GenericMenubar, Menu } from "@/components/menu-bar-generic";
import { useDialog } from "@/components/_providers/dialogue-provider";
import { FlexoLabelEnum } from "@/lib/applications/enums/flexo-label/flexo-label.enums";

function MenuRtpi() {
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

export default MenuRtpi;
