import type { Profile } from "@/types";
import { profile as staticProfile } from "@/data/profile";
import { apiClient, getApiBaseUrl } from "./client";

export async function getProfile(): Promise<Profile> {
  if (!getApiBaseUrl()) {
    return staticProfile;
  }

  return apiClient<Profile>("/api/profile");
}
