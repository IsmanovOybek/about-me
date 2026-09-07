const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export async function apiClient<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  if (!API_BASE_URL) {
    throw new ApiError(
      "NEXT_PUBLIC_API_URL is not configured. Use static data until the API is ready.",
      503,
    );
  }

  const { body, headers, ...rest } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    throw new ApiError(
      `API request failed: ${response.status} ${response.statusText}`,
      response.status,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export function getApiBaseUrl(): string {
  return API_BASE_URL;
}
