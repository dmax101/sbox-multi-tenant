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

function MenuRtpi() {
  const { openDialog } = useDialog();

  const menus: Menu[] = [
    {
      label: "RTPI",
      icon: FileTextIcon,
      items: [
        {
          label: "Overview",
          onClick: () => console.log("Overview"),
          group: "rtpi",
        },
        {
          label: "Novo",
          shortcut: "⌘N",
          onClick: () => openDialog(CooperDialogEnum.ADD_RTPI_DIALOG),
          group: "rtpi",
        },
        {
          label: "Outro",
          shortcut: "⌘O",
          onClick: () => openDialog(CooperDialogEnum.OTHER_RTPI_DIALOG),
          group: "rtpi",
        },
        {
          label: "Abrir",
          shortcut: "⌘A",
          onClick: () => console.log("Abrir"),
          group: "rtpi",
        },
        {
          label: "Preferências",
          onClick: () => console.log("Preferências"),
          group: "others",
        },
        {
          label: "Compartilhar",
          icon: Share2,
          subItems: [
            {
              label: "Email link",
              icon: Mail,
              onClick: () => console.log("Email link"),
            },
            {
              label: "Messages",
              icon: MessageCircle,
              onClick: () => console.log("Messages"),
            },
            {
              label: "Notes",
              icon: NotebookIcon,
              onClick: () => console.log("Notes"),
            },
          ],
          group: "others",
        },
        {
          label: "Imprimir",
          shortcut: "⌘P",
          icon: Printer,
          onClick: () => console.log("Print"),
          group: "others",
        },
      ],
    },
    {
      label: "Cadastro",
      icon: NotebookPenIcon,
      items: [
        {
          label: "Empresa",
          onClick: () => console.log("Empresa"),
          group: "empresa",
        },
        {
          label: "Formas Físicas",
          onClick: () => console.log("Formas Físicas"),
          group: "rtpi",
        },
        {
          label: "Composições",
          group: "rtpi",
          subItems: [
            {
              label: "Ingredientes",
              onClick: () => console.log("Ingredientes"),
            },
            { label: "OGMs", onClick: () => console.log("OGMs") },
            {
              label: "Componentes Nutricionais",
              onClick: () => console.log("Componentes Nutricionais"),
            },
            {
              label: "Minerais e Vitaminas",
              onClick: () => console.log("Minerais e Vitaminas"),
            },
          ],
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
