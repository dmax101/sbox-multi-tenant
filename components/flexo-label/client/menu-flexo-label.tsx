"use client";

import {
  FileTextIcon,
  Mail,
  MessageCircle,
  NotebookIcon,
  NotebookPenIcon,
  Printer,
  Share2,
} from "lucide-react";
import { GenericMenubar, Menu } from "@/components/menu-bar-generic";
import React from "react";
import { useDialog } from "@/components/_providers/dialogue-provider";
import { CooperDialogEnum } from "@/lib/applications/enums/cooper/cooper.enums";
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
            onClick: () => openDialog(FlexoLabelEnum.ADD_FLEXO_LABEL_DIALOG),
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