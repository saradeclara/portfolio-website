"use client";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
	params: {
		id: string;
	};
};

export default function PostPage({ params }: Props) {
	const { id } = params;
	const [currentPostBody, setCurrentPostBody] = useState<BlogPost>();

	useEffect(() => {
		const getCurrentPost = async (id: string) => {
			const { data, error } = await supabase
				.from("posts")
				.select("*")
				.eq("id", id)
				.single();

			if (data) {
				setCurrentPostBody(data);
			}

			if (error) {
				console.log("error", error);
			}
		};

		getCurrentPost(id);
	}, []);

	return (
		<div>
			<h1>Post {id}</h1>
			<ReactMarkdown>{currentPostBody?.body}</ReactMarkdown>
		</div>
	);
}
