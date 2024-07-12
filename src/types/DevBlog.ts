type BlogPost = {
	id: number;
	created_at: string;
	title: string;
	body: string;
	tags: Tag[];
};

type OriginalBlogPost = {
	id: number;
	created_at: string;
	title: string;
	body: string;
	postTags: number[];
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

export type { BlogPost, OriginalBlogPost, Tag, SinglePostProps };
