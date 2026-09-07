import { apiClient, getApiBaseUrl } from "./client";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
}

export async function sendContactMessage(
  payload: ContactPayload,
): Promise<ContactResponse> {
  if (!getApiBaseUrl()) {
    // Placeholder until FastAPI contact endpoint is connected.
    console.info("Contact form payload (static mode):", payload);
    return {
      success: true,
      message: "Message captured locally. Connect NEXT_PUBLIC_API_URL to send.",
    };
  }

  return apiClient<ContactResponse>("/api/contact", {
    method: "POST",
    body: payload,
  });
}
