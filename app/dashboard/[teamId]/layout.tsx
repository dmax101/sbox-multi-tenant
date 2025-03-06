'use client';

import SidebarLayout, {SidebarItem} from "@/components/sidebar-layout";
import {SelectedTeamSwitcher, useUser} from "@stackframe/stack";
import {
    Columns3,
    FileTextIcon,
    Globe,
    ListTodo,
    Settings2,
} from "lucide-react";
import {useParams, useRouter} from "next/navigation";

const navigationItems: SidebarItem[] = [
    {
        name: "Overview",
        href: "/",
        icon: Globe,
        type: "item",
    },
    {
        type: 'label',
        name: 'Management',
    },
    {
        name: "Tarefas",
        href: "/todo",
        icon: ListTodo,
        type: "item",
    },
    {
        type: 'label',
        name: 'Cooperativa',
    },
    {
        name: "RTPI",
        href: "/cooper-rtpi",
        icon: FileTextIcon,
        type: "item",
    },
    {
        type: 'label',
        name: 'Configurações',
    },
    {
        name: "Configuration",
        href: "/configuration",
        icon: Settings2,
        type: "item",
    },
];

export default function Layout(props: Readonly<{ children: React.ReactNode }>) {
    const params = useParams<{ teamId: string }>();
    const user = useUser({or: 'redirect'});
    const team = user.useTeam(params.teamId);
    const router = useRouter();

    if (!team) {
        router.push('/dashboard');
        return null;
    }

    return (
        <SidebarLayout
            items={navigationItems}
            basePath={`/dashboard/${team.id}`}
            sidebarTop={<SelectedTeamSwitcher
                selectedTeam={team}
                urlMap={(team) => `/dashboard/${team.id}`}
            />}
            baseBreadcrumb={[{
                title: team.displayName,
                href: `/dashboard/${team.id}`,
            }]}
        >
            {props.children}
        </SidebarLayout>
    );
}