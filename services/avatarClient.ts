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
  const response = await fetch("/api/avatar-chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as AvatarChatResponse;

  if (!response.ok && !result.reply) {
    throw new Error("Project Agent request failed");
  }

  return result;
}
