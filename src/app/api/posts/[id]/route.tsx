import { supabase } from "@/lib/supabaseClient";
import generateBlogPostWithTags from "@/src/helpers/generateBlogTags";
import getQueryId from "@/src/helpers/getQueryId";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

/**
 * The function GET retrieves a blog post and its associated tags from a database and generates a blog
 * post with tags.
 * @param {NextApiRequest} request - The `request` parameter in the `GET` function is of type
 * `NextApiRequest`, which is a type provided by Next.js for handling API requests. It contains
 * information about the incoming HTTP request, such as the URL, headers, and query parameters. In the
 * provided code snippet, the function
 * @returns a JSON response of an updated blog post with tags.
 */
export async function GET(request: NextApiRequest) {
	if (request.url) {
		const id = getQueryId(request.url);
		let { data: post } = await supabase.from("posts").select("*").eq("id", id);
		let { data: tags } = await supabase.from("tags").select("*");

		if (post && tags) {
			const updatedPost = generateBlogPostWithTags(post, tags)[0];
			return NextResponse.json(updatedPost);
		}
	}
}
