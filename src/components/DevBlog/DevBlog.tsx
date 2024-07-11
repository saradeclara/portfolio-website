import { Box, OrderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BlogPost } from "@/src/types/DevBlog";
import SinglePost from "./SinglePost";
import { blogPostBg, textColor } from "@/src/styles/colors";
import "../../styles/loading.css";
import { borderRadius, loadingPostsStyle } from "@/src/styles/globalClasses";

const DevBlog = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loadingPosts, updateLoadingPosts] = useState<boolean>(false);

	useEffect(() => {
		const fetchPosts = async () => {
			updateLoadingPosts(true);
			const response = await fetch("/api/posts", { method: "GET" });
			const posts = await response.json();

			if (!response.ok) {
				throw new Error();
			}
			if (posts) {
				setPosts(posts);
				updateLoadingPosts(false);
			}
		};

		fetchPosts();
	}, []);

	if (loadingPosts)
		return (
			<div className="pulse loading-posts">
				<Box sx={{ ...loadingPostsStyle }}>Loading Posts...</Box>
			</div>
		);

	return (
		<OrderedList
			color="rgba(255,255,255,.7)"
			sx={{
				height: "auto",
				margin: "0 auto",
			}}
		>
			{posts.map((post, index) => {
				return <SinglePost key={index.toString()} post={post} index={index} />;
			})}
		</OrderedList>
	);
};

export default DevBlog;
