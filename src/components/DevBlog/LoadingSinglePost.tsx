import { blogPostBg } from "@/src/styles/colors";
import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const LoadingSinglePost = () => {
	return (
		<Stack
			sx={{
				width: "50%",
				margin: "0 auto",
				background: blogPostBg,
				padding: "15px",
				borderRadius: "10px",
				marginBottom: "20px",
			}}
		>
			<Skeleton startColor="gray.500" endColor="gray.100" height="20px" />
			<Skeleton startColor="gray.500" endColor="gray.100" height="20px" />
			<Skeleton startColor="gray.500" endColor="gray.100" height="20px" />
		</Stack>
	);
};

export default LoadingSinglePost;
