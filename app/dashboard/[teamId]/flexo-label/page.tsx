import React from "react";
import PageClient from "@/app/dashboard/[teamId]/flexo-label/page-client";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: {
    teamId: string;
  };
}

async function Page({ params }: Readonly<PageProps>) {
  const { teamId } = params;

  const data = {
    clients: await prisma.client.findMany({
      where: {
        tenantId: teamId,
      },
    }),
  };

  return <PageClient data={data} />;
}

export default Page;
