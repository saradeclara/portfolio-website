import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingBlogPost = () => {
	return (
		<>
			<Box
				background="url(/images/background5.jpg)"
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
					background: "rgba(35,35,35,.9)",
					zIndex: "-1",
				}}
			></Box>
			<div className="main-wrapper" id="loading-window"></div>
			<Box
				sx={{
					backgroundColor: "rgb(10,10,10, .9)",
					width: "100vw",
					height: "100vh",
					position: "fixed",
					top: 0,
					zIndex: 2000,
					backdropFilter: "blur(1px)",
				}}
			></Box>
			<Box
				sx={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					zIndex: "2001",
				}}
			>
				<Spinner
					sx={{
						margin: "0 auto",
					}}
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="gray.500"
					size="xl"
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					zIndex="2001"
				/>
			</Box>
		</>
	);
};

export default LoadingBlogPost;
