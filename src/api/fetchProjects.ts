import type { Project } from "../types"

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/meu-portfolio/projects.json")
  return response.json()
}
