"use client";
import { supabase } from "@/lib/supabaseClient";
import { BlogPost } from "@/src/types/DevBlog";
import { Box, Heading } from "@chakra-ui/react";
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

interface MarkdownComponentProps {
	node: any;
	inline: any;
	className?: string;
	children: React.ReactNode;
}

type Props = {
	params: {
		id: string;
	};
};

export default function PostPage({ params }: Props) {
	const scrollY = useScrollPosition();
	const scrollToSection = useSmoothScroll();

	const { id } = params;
	const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		const getCurrentPost = async (id: string) => {
			const response = await fetch(`/api/posts/${id}`);
			const jsonResponse = await response.json();

			if (jsonResponse) {
				setCurrentPost(jsonResponse);
			}

			if (!response.ok) {
				console.log("error");
			}
		};

		getCurrentPost(id);
	}, []);

	if (currentPost && currentPost.tags)
		return (
			<>
				<Box
					background="url(/images/background4.jpg)"
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
				<div className="main-wrapper">
					<Heading>{currentPost.title}</Heading>
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
				</div>
			</>
		);
}
