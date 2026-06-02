import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    message?: string;
    projectId?: string;
  } | null;

  return NextResponse.json({
    reply: body?.message
      ? "你好，我是项目展示页的小助理，目前正在开发中。之后我会根据项目资料回答你的问题。"
      : "你好，我是项目展示页的小助理，目前正在开发中。",
  });
}
