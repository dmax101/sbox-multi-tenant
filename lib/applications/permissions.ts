import {CurrentServerUser, ServerTeam, Team} from "@stackframe/stack";
import {IAppPermission} from "@/lib/applications/interfaces/permissions.interface";

export async function permissionsHandle(user: CurrentServerUser): Promise<void> {
    await handleAdminPermission(user);
    await handleAllAppPermissions(user);
}

async function handleAdminPermission(user: CurrentServerUser): Promise<void> {
    console.log("admin permission triggered");
    const actualTeam: Team | null = user.selectedTeam;

    // Check if is admin user
    const {type} = user.clientReadOnlyMetadata;

    // Check if user has admin permission. If type is equal to "admin" check
    if (type === "admin") {
        user.hasPermission(actualTeam!, "admin").then((userHasPermission) => {
            if (!userHasPermission) {
                user.grantPermission(actualTeam!, "admin");
                console.log("User admin permission granted!");
            } else {
                console.log("User already has admin permission granted!");
            }
        }).catch((err: any): void => {
            console.error(err);
        });
    } else {
        user.revokePermission(actualTeam!, "admin").then((): void => {
            console.log("User Permission Revoked Successfully!");
        });
    }
}

async function handleAllAppPermissions(user: CurrentServerUser): Promise<void> {
    console.log("All permissions triggered");
    const listTeams: ServerTeam[] = await user.listTeams();
    const appPermissionsMetadata: IAppPermission[] = user.clientReadOnlyMetadata.appPermissions;

    for (const team of listTeams) {
        appPermissionsMetadata.forEach((permission: IAppPermission): void => {
            user.hasPermission(team, permission.appPermission).then((userHasPermission: boolean): void => {
                if (!userHasPermission) {
                    user.revokePermission(team, permission.appPermission).then((): void => {
                        console.log("User Permission Revoked Successfully!");
                    })
                } else {
                    user.grantPermission(team, permission.appPermission).then((): void => {
                        console.log("User Permission Granted Successfully!");
                    })
                }
            })
        })
    }
}