"use client";

import TodoApp from "@/components/todo/todo-app";
import {ApplicationsPermissions} from "@/lib/applications/enums/applications.enum";
import {IAppPermissions} from "@/lib/user/interfaces/user.interface";
import {useUser} from "@stackframe/stack";
import {useEffect, useState} from "react";

export default function TodoAppPortal() {
    const user = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const selectedTeamId = user?.selectedTeam?.id;

    const metadata = user?.clientReadOnlyMetadata;
    const appPermissions = metadata?.appPermissions;
    const permissions: IAppPermissions[] = appPermissions?.filter(
        (app: IAppPermissions) => app.appPermission === ApplicationsPermissions.TODO
    );
    const permissionWithTeamId = permissions?.find(
        (permission: IAppPermissions) => permission.teamId === selectedTeamId
    );

    useEffect(() => {
        if (user)
            setIsLoading(false);

    }, [user]);

    if (!permissionWithTeamId) {
        return <div>Permission Denied</div>;
    }

    console.log(user?.selectedTeam);

    return (
        <div>
            <TodoApp/>
        </div>
    );
}
