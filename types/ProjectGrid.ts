type GithubProject = {
	name: string;
	html_url: string;
	node_id: string;
};

type AllowedRepo = {
	name: string;
	description: string;
};

export type { GithubProject, AllowedRepo };
