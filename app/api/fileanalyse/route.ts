import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("upfile");

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json(
      { error: "No file uploaded or file is not valid" },
      { status: 400 }
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { name, type } = file;


  return NextResponse.json({ name, type, size: buffer.length });
}
