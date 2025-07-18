import type { Project } from "../types"

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/projects.json")
  return response.json()
}
