import { AllowedRepo, GithubProject } from "@/types/ProjectGrid";
import {
	Card,
	CardBody,
	Stack,
	Heading,
	Divider,
	CardFooter,
	Button,
	Image,
	Text,
	Box,
} from "@chakra-ui/react";
import React from "react";
import "../../styles/loading.css";
import { singleCardBg } from "@/src/styles/colors";
import { borderRadius } from "@/src/styles/globalClasses";

const SingleLoading = () => {
	return (
		<Card marginRight={5} maxW="sm">
			<CardBody background={singleCardBg}>
				<Box
					className="pulse"
					sx={{
						width: "300px",
						height: "500px",
						borderRadius: borderRadius,
					}}
				></Box>
				<Box paddingTop={5}>
					<Box
						className="pulse"
						sx={{
							width: "300px",
							height: "25px",
							borderRadius: borderRadius,
						}}
					></Box>
					<Box
						className="pulse"
						sx={{
							marginTop: "5px",
							width: "300px",
							height: "25px",
							borderRadius: borderRadius,
						}}
					></Box>
				</Box>
			</CardBody>
		</Card>
	);
};

export default SingleLoading;
