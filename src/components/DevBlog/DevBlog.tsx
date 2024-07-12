import { Box, OrderedList, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BlogPost } from "@/src/types/DevBlog";
import SinglePost from "./SinglePost";
import "../../styles/loading.css";
import { blogPostBg } from "@/src/styles/colors";
import LoadingBlogPost from "../BlogPost/LoadingBlogPost";
import LoadingSinglePost from "./LoadingSinglePost";

const DevBlog = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loadingPosts, updateLoadingPosts] = useState<boolean>(true);

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
		return [0, 1].map((_el, index) => {
			return <LoadingSinglePost key={index.toString()} />;
		});

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
