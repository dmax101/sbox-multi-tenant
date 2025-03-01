import { ApplicationsPermissions } from "@/lib/applications/enums/applications.enum";

export interface IAppPermissions {
    teamId: string;
    appPermission: ApplicationsPermissions;
}

export interface IUserServerMetadata {
    type: string;
    appPermissions?: IAppPermissions[];
}

export interface IUserReadOnlyMetadata {
    type: string;
    appPermissions?: IAppPermissions[];
}