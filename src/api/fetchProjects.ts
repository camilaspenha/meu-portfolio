import type { Project } from "../types"
import { SITE_URL } from "../constants/dados"

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(SITE_URL + "projects.json")
  return response.json()
}
