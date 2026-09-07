import type { Project } from "@/types";
import { projects as staticProjects } from "@/data/projects";
import { apiClient, getApiBaseUrl } from "./client";

export async function getProjects(): Promise<Project[]> {
  if (!getApiBaseUrl()) {
    return staticProjects;
  }

  return apiClient<Project[]>("/api/projects");
}
