import { Box } from "@chakra-ui/react";
import React from "react";
import SingleLoading from "./SingleLoading";

const LoadingGrid = () => {
	return (
		<Box sx={{ display: "flex" }}>
			{[0, 1].map((_char, index) => {
				return <SingleLoading key={index.toString()} />;
			})}
		</Box>
	);
};

export default LoadingGrid;
