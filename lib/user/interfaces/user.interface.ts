import { ApplicationsPermissionsEnums } from "@/lib/applications/enums/applications.enums";

export interface IAppPermissions {
    teamId: string;
    appPermission: ApplicationsPermissionsEnums;
}

export interface IUserServerMetadata {
    type: string;
    appPermissions?: IAppPermissions[];
}

export interface IUserReadOnlyMetadata {
    type: string;
    appPermissions?: IAppPermissions[];
}