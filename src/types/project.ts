export interface GithubLinkItem {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  githubLink?: string;
  githubLinks?: GithubLinkItem[];
  demoLink?: string;
  isDeployed?: boolean;
}
