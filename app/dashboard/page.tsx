import {PageClient} from "./page-client";
import {stackServerApp} from "@/stack";
import {permissionsHandle} from "@/lib/applications/permissions";
import {CurrentServerUser} from "@stackframe/stack";

export const metadata = {
    title: "Dashboard - Stack Template",
};

export default async function Dashboard() {
    const user: CurrentServerUser = await stackServerApp.getUser({or: 'redirect'});

    permissionsHandle(user).then((): void => console.log("Permissions updated successfully!")).catch((e) => console.error(e));

    return <PageClient/>;

}
