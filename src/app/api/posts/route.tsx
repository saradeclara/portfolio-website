import { supabase } from "@/lib/supabaseClient";
import generateBlogPostWithTags from "@/src/helpers/generateBlogTags";
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

	// let postTags: Tag[] = [];
	if (posts && tags) {
		const updatedPosts = generateBlogPostWithTags(posts, tags);

		return NextResponse.json(updatedPosts);
	}
}
