type BlogPost = {
	id: number;
	created_at: string;
	title: string;
	body: string;
	tags: Tag[];
};

type Tag = {
	id: number;
	created_at: string;
	name: string;
	color: string;
};

export type { BlogPost, Tag };
