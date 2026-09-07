import type { Experience } from "@/types";
import { experience as staticExperience } from "@/data/experience";
import { apiClient, getApiBaseUrl } from "./client";

export async function getExperience(): Promise<Experience[]> {
  if (!getApiBaseUrl()) {
    return staticExperience;
  }

  return apiClient<Experience[]>("/api/experience");
}
