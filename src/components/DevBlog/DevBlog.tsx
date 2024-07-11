import { supabase } from "@/lib/supabaseClient";
import {
	Box,
	Button,
	Link,
	ListItem,
	OrderedList,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { formatDate } from "date-fns/format";
import { BlogPost } from "@/src/types/DevBlog";
import ReactMarkdown from "react-markdown";

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

	if (loadingPosts) return <Box>Loading Posts...</Box>;

	return (
		<OrderedList
			color="rgba(255,255,255,.7)"
			sx={{
				height: "auto",
				margin: "0 auto",
			}}
		>
			{posts.map((post, index) => {
				return (
					<ListItem
						width={{ base: "auto", md: "60%" }}
						margin={{ base: "0px 0px 28px 0px", md: "0 auto 20px auto" }}
						listStyleType="none"
						sx={{
							background: "rgba(56,56,56,.8)",
							padding: "15px",
							borderRadius: "15px",
						}}
						key={index.toString()}
					>
						<Text sx={{ fontWeight: "bold" }}>
							<Link href={`/posts/${post.id}`}>{post.title}</Link>
							<Text
								sx={{
									display: "inline",
									fontWeight: "normal",
								}}
							>
								<Text sx={{ fontStyle: "italic" }} fontSize="small">
									published on{" "}
									{formatDate(new Date(post.created_at), "do MMMM yyyy")}
								</Text>

								<Text
									height="120px"
									overflow="hidden"
									fontSize="15px"
									padding="10px 0px"
									noOfLines={5}
								>
									<ReactMarkdown>{post.body}</ReactMarkdown>
								</Text>
							</Text>
						</Text>
						<Box
							sx={{
								display: "flex",
								marginTop: "20px",
								gap: "5px",
							}}
						>
							{post.tags.map((singleTag) => {
								return (
									<Button background={singleTag.color} color="white" size="xs">
										{singleTag.name}
									</Button>
								);
							})}
						</Box>
					</ListItem>
				);
			})}
		</OrderedList>
	);
};

export default DevBlog;
