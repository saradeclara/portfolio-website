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

type SinglePostProps = {
	post: BlogPost;
	index: number;
};

export type { BlogPost, Tag, SinglePostProps };
