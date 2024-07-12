import { BlogPost, OriginalBlogPost, Tag } from "../types/DevBlog";

/**
 * The function `generateBlogPostWithTags` takes an array of original blog posts and an array of tags,
 * and returns a new array of blog posts with updated tags based on the provided tag IDs.
 * @param {OriginalBlogPost[]} posts - The `posts` parameter is an array of original blog posts, where
 * each post is an object containing information such as post content, author, date, and an array of
 * tag IDs associated with that post.
 * @param {Tag[]} tags - The `tags` parameter in the `generateBlogPostWithTags` function represents an
 * array of tag objects. These tag objects contain information such as an `id` property that uniquely
 * identifies the tag. The function uses this array of tags to match and retrieve the corresponding
 * tags for each blog post from the
 * @returns The function `generateBlogPostWithTags` is returning an array of blog posts with their
 * corresponding tags replaced with the actual tag objects from the provided `tags` array. Each blog
 * post in the returned array will have the `tags` property containing an array of Tag objects instead
 * of an array of tag IDs.
 */
const generateBlogPostWithTags = (posts: OriginalBlogPost[], tags: Tag[]) => {
	let newPostTags: Tag[] = [];
	let copyOfPosts = [...posts];
	const updatedPosts = copyOfPosts.map((singlePost) => {
		newPostTags = [];
		singlePost.postTags.forEach((tagId: number) => {
			const currentTag = tags?.find((el) => el.id === tagId);
			if (currentTag) {
				newPostTags.push(currentTag);
			}
		});
		const { postTags, ...restOfSinglePost } = singlePost;
		return {
			...restOfSinglePost,
			tags: newPostTags,
		};
	});
	return updatedPosts;
};

export default generateBlogPostWithTags;
