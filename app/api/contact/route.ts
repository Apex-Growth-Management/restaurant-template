import { NextResponse } from "next/server";

const ZAPIER_WEBHOOK = process.env.ZAPIER_WEBHOOK_URL || "";

export async function POST(req: Request) {
  const body = await req.json();

  if (ZAPIER_WEBHOOK) {
    await fetch(ZAPIER_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  return NextResponse.json({ success: true });
}
