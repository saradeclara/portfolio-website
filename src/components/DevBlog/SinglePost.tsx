import { blogPostBg } from "@/src/styles/colors";
import { borderRadius } from "@/src/styles/globalClasses";
import { SinglePostProps } from "@/src/types/DevBlog";
import { ListItem, Box, Button, Text } from "@chakra-ui/react";
import { formatDate } from "date-fns/format";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import BlogTags from "./BlogTags";

const SinglePost = ({ post, index }: SinglePostProps) => {
	return (
		<ListItem
			sx={{
				width: { base: "auto", md: "60%" },
				margin: { base: "0px 0px 28px 0px", md: "0 auto 20px auto" },
				padding: "15px",
				listStyleType: "none",
				background: blogPostBg,
				borderRadius: borderRadius,
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
					<Text sx={{ fontStyle: "italic", fontSize: "small" }}>
						published on {formatDate(new Date(post.created_at), "do MMMM yyyy")}
					</Text>

					<Text
						sx={{
							height: "120px",
							overflow: "hidden",
							fontSize: "15px",
							padding: "10px 0px",
							noOfLines: 5,
						}}
					>
						<ReactMarkdown>{post.body}</ReactMarkdown>
					</Text>
				</Text>
			</Text>
			<Box
				sx={{
					marginTop: "20px",
				}}
			>
				<BlogTags tags={post.tags} />
			</Box>
		</ListItem>
	);
};

export default SinglePost;
