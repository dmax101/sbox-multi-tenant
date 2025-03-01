'use client';

import React, {createContext, useState} from 'react';
import {FileTextIcon, Settings2, Share2, Printer, Mail, MessageCircle, NotebookIcon} from "lucide-react";
import {GenericMenubar, Menu, MenubarProps} from "@/components/menu-bar-generic";
import {MenubarRtpi} from "@/components/cooper/rtpi/menubar-rtpi";

export const CooperRtpiContext = createContext({});

function PageClient() {
    const [message, setMessage] = useState("Olá, mundo!");

    const menus: Menu[] = [
        {
            label: "Cadastro",
            icon: FileTextIcon,
            items: [
                { label: "New Tab", shortcut: "⌘T", onClick: () => console.log("New Tab"), group: "A" },
                { label: "New Window", shortcut: "⌘N", onClick: () => console.log("New Window"), group: "A" },
                { label: "New Incognito Window", disabled: true, group: "A" },
                { label: "Preferences", onClick: () => console.log("Preferences"), group: "B" },
                {
                    label: "Share",
                    icon: Share2,
                    subItems: [
                        { label: "Email link", icon: Mail, onClick: () => console.log("Email link") },
                        { label: "Messages", icon: MessageCircle, onClick: () => console.log("Messages") },
                        { label: "Notes", icon: NotebookIcon, onClick: () => console.log("Notes") },
                    ],
                    group: "B"
                },
                { label: "Print...", shortcut: "⌘P", icon: Printer, onClick: () => console.log("Print"), group: "C" },
            ],
        }
    ];

    return (
        <CooperRtpiContext.Provider value={{message, setMessage}}>
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">RTPI</h2>
                    </div>
                    <div className="">
                        <GenericMenubar menus={menus} />
                    </div>
                </div>
            </div>
        </CooperRtpiContext.Provider>
    );
}

export default PageClient;







