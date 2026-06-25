import { answerProjectQuestion } from "@/data/project-knowledge";

export type AvatarSource = {
  id: string;
  title: string;
  source: string;
  tags: string[];
};

export type AvatarChatRequest = {
  message: string;
  projectId?: string;
};

export type AvatarChatResponse = {
  success: boolean;
  reply: string;
  retrievalStatus?: string;
  sources: AvatarSource[];
};

export async function sendAvatarMessage(
  payload: AvatarChatRequest,
): Promise<AvatarChatResponse> {
  const message = payload.message.trim();

  if (!message) {
    return {
      success: false,
      reply: "请输入问题后再发送。",
      retrievalStatus: "EMPTY_QUESTION",
      sources: [],
    };
  }

  return answerProjectQuestion(message, payload.projectId);
}
