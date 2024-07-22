"use client";
import { supabase } from "@/lib/supabaseClient";
import { BlogPost } from "@/src/types/DevBlog";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../../../../src/styles/markdown.css";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import BlogTags from "@/src/components/DevBlog/BlogTags";
import useScrollPosition from "../../hooks/useScrollPosition";
import useSmoothScroll from "../../hooks/useSmoothScroll";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { formatDate } from "date-fns/format";
import LoadingBlogPost from "@/src/components/BlogPost/LoadingBlogPost";

interface CodeBlockProps {
	className?: string;
	children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className, children }) => {
	const language = className ? className.replace("language-", "") : "";
	return (
		<SyntaxHighlighter language={language} style={vscDarkPlus}>
			{String(children).replace(/\n$/, "")}
		</SyntaxHighlighter>
	);
};

// interface MarkdownComponentProps {
// 	node: any;
// 	inline: any;
// 	className?: string;
// 	children: React.ReactNode;
// }

type Props = {
	params: {
		id: string;
	};
};

export default function PostPage({ params }: Props) {
	const [loadingPage, setLoadingPage] = useState(true);
	const { id } = params;
	const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		const getCurrentPost = async (id: string) => {
			setLoadingPage(true);
			const response = await fetch(`/api/posts/${id}`);
			const jsonResponse = await response.json();

			if (jsonResponse) {
				setCurrentPost(jsonResponse);
				setLoadingPage(false);
			}

			if (!response.ok) {
				console.log("error");
			}
		};

		getCurrentPost(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loadingPage) return <LoadingBlogPost />;

	if (currentPost && currentPost.tags)
		return (
			<>
				<Box
					background="rgba(35,35,35)"
					sx={{
						backgroundSize: "100%",
						width: "100%",
						height: "100vh",
						zIndex: "-2",
						position: "fixed",
						top: 0,
					}}
				></Box>
				<Box
					sx={{
						width: "100%",
						height: "100vh",
						position: "fixed",
						top: 0,
						background: "rgba(20,20,20,.9)",
						zIndex: "-1",
					}}
				></Box>
				<Box
					className="main-wrapper"
					padding={{ base: "40px", xl: "100px 250px 200px 250px" }}
					margin={{ base: "20px", xl: "90px" }}
					borderRadius="15px"
					background="rgb(29, 29, 29)"
					color="rgba(255, 255, 255, 0.7)"
					boxShadow="0 0 20px rgba(0, 0, 0, 0.313)"
				>
					<Heading sx={{ paddingBottom: 0, fontSize: "35px" }}>
						{currentPost.title}
					</Heading>
					<Box sx={{ padding: "10px 0px" }}>
						Published by{" "}
						<Text sx={{ fontWeight: "bold", display: "inline" }}>Sara</Text> on{" "}
						{formatDate(currentPost.created_at, "do MMMM yyyy")}
					</Box>
					<BlogTags tags={currentPost.tags} />
					<ReactMarkdown
						rehypePlugins={[rehypeSlug]}
						components={{
							code({ node, inline, className, children, ...props }: any) {
								const match = /language-(\w+)/.exec(className || "");
								return !inline && match ? (
									<CodeBlock className={className}>{children}</CodeBlock>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
						}}
					>
						{currentPost.body}
					</ReactMarkdown>
				</Box>
			</>
		);
}
