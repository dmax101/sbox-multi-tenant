import { auth } from "@/app/api/auth/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const accessToken = request.headers.get("X-Stack-Access-Token");

  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is required" },
      { status: 401 }
    );
  }

  try {
    const user = await auth.validateToken(accessToken);

    // Busca clientes no banco
    const clients = await prisma.client.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
