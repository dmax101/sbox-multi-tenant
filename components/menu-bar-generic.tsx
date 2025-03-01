import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {LucideIcon} from "lucide-react";

export interface MenuItem {
    label: string;
    shortcut?: string;
    disabled?: boolean;
    onClick?: () => void;
    subItems?: MenuItem[];
    icon?: LucideIcon;
    group?: string;
}

export interface Menu {
    label: string;
    icon?: LucideIcon;
    items: MenuItem[];
}

export interface MenubarProps {
    menus: Menu[];
}

export function GenericMenubar({menus}: MenubarProps) {
    return (
        <Menubar>
            {menus.map((menu, index) => (
                <MenubarMenu key={index}>
                    <MenubarTrigger>
                        {menu.icon && <menu.icon className="mr-2 h-5 w-5"/>}
                        {menu.label}
                    </MenubarTrigger>
                    <MenubarContent>
                        {Object.values(menu.items.reduce((acc, item, itemIndex) => {
                            if (item.group) {
                                if (!acc[item.group]) {
                                    acc[item.group] = [];
                                }
                                acc[item.group].push(item);
                            } else {
                                acc[itemIndex] = [item];
                            }
                            return acc;
                        }, {} as Record<string, MenuItem[]>)).map((groupItems: MenuItem[], groupIndex: number) => (
                            <React.Fragment key={groupIndex}>
                                {groupItems.map((item: MenuItem, itemIndex: number) => (
                                    <React.Fragment key={itemIndex}>
                                        {item.subItems ? (
                                            <MenubarSub>
                                                <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
                                                <MenubarSubContent>
                                                    {item.subItems.map((subItem: MenuItem, subItemIndex: number) => (
                                                        <MenubarItem
                                                            key={subItemIndex}
                                                            onClick={subItem.onClick}
                                                            disabled={subItem.disabled}
                                                        >
                                                            {subItem.label}
                                                            {subItem.shortcut &&
                                                                <MenubarShortcut>{subItem.shortcut}</MenubarShortcut>}
                                                        </MenubarItem>
                                                    ))}
                                                </MenubarSubContent>
                                            </MenubarSub>
                                        ) : (
                                            <MenubarItem
                                                onClick={item.onClick}
                                                disabled={item.disabled}
                                            >
                                                {item.label}
                                                {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
                                            </MenubarItem>
                                        )}
                                    </React.Fragment>
                                ))}
                                {groupIndex < Object.keys(menu.items).length - 1 && <MenubarSeparator/>}
                            </React.Fragment>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
            ))}
        </Menubar>
    );
}