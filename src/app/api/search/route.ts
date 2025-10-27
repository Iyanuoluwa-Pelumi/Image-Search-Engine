import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const PEXELS_KEY = process.env.PEXELS_API_KEY;
  if (!PEXELS_KEY) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${q}&per_page=50`,
      { headers: { Authorization: PEXELS_KEY } }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
