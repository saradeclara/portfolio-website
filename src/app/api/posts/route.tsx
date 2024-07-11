// pages/api/hello.ts
import { supabase } from "@/lib/supabaseClient";
import { BlogPost } from "@/src/types/DevBlog";
import { NextResponse } from "next/server";

/**
 * This function retrieves posts and tags from a database, maps the tags to the
 * corresponding posts, and returns the updated posts with tags.
 * @returns The `GET` function is returning a JSON response with an object containing the
 * `updatedPosts` array. Each element in the `updatedPosts` array is a modified post object that
 * includes the `tags` property with an array of tag objects based on the `tagId` values from the
 * original post object's `postTags` array.
 */
export async function GET() {
	let { data: posts } = await supabase.from("posts").select("*");
	let { data: tags } = await supabase.from("tags").select("*");

	let postTags: BlogPost[] = [];
	if (posts) {
		let copyOfPosts = [...posts];
		const updatedPosts = copyOfPosts.map((singlePost) => {
			postTags = [];
			singlePost.postTags.forEach((tagId: number) => {
				const currentTag = tags?.find((el) => el.id === tagId);
				postTags.push(currentTag);
			});
			delete singlePost.postTags;
			return {
				...singlePost,
				tags: postTags,
			};
		});
		return NextResponse.json(updatedPosts);
	}
}
