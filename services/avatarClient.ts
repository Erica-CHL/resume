export type AvatarChatRequest = {
  message: string;
  projectId?: string;
};

export type AvatarChatResponse = {
  reply: string;
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

  if (!response.ok) {
    throw new Error("Avatar service request failed");
  }

  return response.json() as Promise<AvatarChatResponse>;
}
