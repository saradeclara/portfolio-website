import { supabase } from "@/lib/supabaseClient";
import { Box, Link, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { formatDate } from "date-fns/format";
import { PostgrestError } from "@supabase/supabase-js";

const DevBlog = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loadingPosts, updateLoadingPosts] = useState<boolean>(false);
	const [errorPosts, setErrorPosts] = useState<PostgrestError | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			updateLoadingPosts(true);
			let { data: posts, error } = await supabase.from("posts").select("*");
			if (error) setErrorPosts(error);
			if (posts) {
				setPosts(posts);
				updateLoadingPosts(false);
			}
		};

		fetchPosts();
	}, []);

	if (loadingPosts) return <Box>Loading Posts...</Box>;
	if (errorPosts) return <Box>ERROR</Box>;

	return (
		<OrderedList
			color="rgba(255,255,255,.7)"
			sx={{ width: "400px", height: "300px", margin: "0 auto" }}
		>
			{posts.map((post, index) => {
				return (
					<ListItem key={index.toString()}>
						<Text sx={{ fontWeight: "bold" }}>
							<Link href={`/posts/${post.id}`}>{post.title}</Link>
							<Text
								sx={{
									fontStyle: "italic",
									display: "inline",
									fontWeight: "normal",
								}}
							>
								, added on{" "}
								{formatDate(new Date(post.created_at), "do MMMM yyyy")}
							</Text>
						</Text>
					</ListItem>
				);
			})}
		</OrderedList>
	);
};

export default DevBlog;
