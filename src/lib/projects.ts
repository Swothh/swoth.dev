import type { Project } from '../data/portfolio';

export function getProjectHref(project: Project): string {
  if (project.href) return project.href;

  return `https://github.com/${project.repository}`;
}
