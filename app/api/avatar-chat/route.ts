import { NextResponse } from "next/server";
import { answerProjectQuestion } from "@/data/project-knowledge";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    message?: string;
    projectId?: string;
  } | null;

  const message = body?.message?.trim() ?? "";

  if (!message) {
    return NextResponse.json(
      {
        success: false,
        reply: "请输入问题后再发送。",
        retrievalStatus: "EMPTY_QUESTION",
        sources: [],
      },
      { status: 400 },
    );
  }

  if (message.length > 300) {
    return NextResponse.json(
      {
        success: false,
        reply: "您的提问内容过长，请精简后重试。",
        retrievalStatus: "QUESTION_TOO_LONG",
        sources: [],
      },
      { status: 400 },
    );
  }

  return NextResponse.json(answerProjectQuestion(message, body?.projectId));
}
