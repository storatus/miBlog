/* eslint-disable @typescript-eslint/no-explicit-any */
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  const { body } = request;

  if (filename) {
    const blob = await put(filename, body as any, {
      access: "public",
    });

    return NextResponse.json(blob);
  }

  return NextResponse.json(
    { error: "Filename no se encontro" },
    { status: 400 }
  );
}
