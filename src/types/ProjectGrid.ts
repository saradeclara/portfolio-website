type GithubProject = {
	name: string;
	html_url: string;
	node_id: string;
};

type AllowedRepo = {
	name: string;
	description: string;
	devDiaryIndex?: number;
	demoLink?: string;
	thumbnail?: string;
};

export type { GithubProject, AllowedRepo };
