import type { Project } from '../data/portfolio';

export function getProjectHref(project: Project): string | undefined {
  if (project.href) return project.href;
  if (project.repository) return `https://github.com/${project.repository}`;

  return undefined;
}
