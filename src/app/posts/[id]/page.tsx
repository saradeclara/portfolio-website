import { notFound } from "next/navigation";

type Props = {
	params: {
		id: string;
	};
};

export default function PostPage({ params }: Props) {
	const { id } = params;

	// Here you would typically fetch the post data using the id
	// For this example, we'll just display the id

	// If the post doesn't exist, you can call notFound()
	// if (!post) notFound()

	return (
		<div>
			<h1>Post {id}</h1>
			<p>This is the content for post {id}</p>
		</div>
	);
}
