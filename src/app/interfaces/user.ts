export interface User {
  avatar_url: string | null;
  bio: string|null;
  blog: string|null;
  company: string|null;
  created_at: string|null;
  email: string|null;
  events_url: string|null;
  followers: number;
  followers_url: string|null;
  following: number;
  following_url: string|null;
  gists_url: string;
  gravatar_id: string;
  hireable: string|null;
  html_url: string|null;
  id: number;
  location: string|null;
  login: string;
  name: string|null;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string|null;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string|null;
  type: string;
  updated_at: string;
  url: string;
}
