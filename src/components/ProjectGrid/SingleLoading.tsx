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

const SingleLoading = () => {
	return (
		<Card marginRight={5} maxW="sm">
			<CardBody>
				<Box
					className="pulse"
					sx={{
						width: "300px",
						height: "250px",
						// background: "lightgray",
						borderRadius: "10px",
					}}
				></Box>
				<Box paddingTop={5}>
					<Box
						className="pulse"
						sx={{
							width: "300px",
							height: "25px",
							// background: "lightgray",
							borderRadius: "10px",
						}}
					></Box>
					<Box
						className="pulse"
						sx={{
							marginTop: "5px",
							width: "300px",
							height: "25px",
							// background: "lightgray",
							borderRadius: "10px",
						}}
					></Box>
				</Box>
			</CardBody>
			<Divider />
		</Card>
	);
};

export default SingleLoading;
