import { Tag } from "@/src/types/DevBlog";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

const BlogTags = ({ tags }: { tags: Tag[] }) => {
	return (
		<Box display="flex" gap="5px">
			{tags.map((singleTag) => {
				return (
					<Button
						key={`${singleTag.toString()}-key`}
						_hover={{ bg: singleTag.color }}
						background={singleTag.color}
						color="white"
						size="xs"
					>
						{singleTag.name}
					</Button>
				);
			})}
		</Box>
	);
};

export default BlogTags;
