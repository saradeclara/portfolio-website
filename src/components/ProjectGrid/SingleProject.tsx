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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SingleProject = ({
	singleProject,
	allowedRepos,
}: {
	singleProject: GithubProject;
	allowedRepos: AllowedRepo[];
}) => {
	return (
		<Card key={singleProject.node_id} marginRight={5} maxW="sm">
			<CardBody>
				<Image
					src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{singleProject.name}</Heading>
					<Text fontSize="sm">
						{
							allowedRepos.find(
								(singleRepo) => singleRepo.name === singleProject.name
							)?.description
						}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter
				justify="space-between"
				flexWrap="wrap"
				// sx={{
				// 	"& > button": {
				// 		minW: "136px",
				// 	},
				// }}
			>
				<Link href={singleProject.html_url}>
					<Button flex="1" variant="ghost">
						Repo Link
					</Button>
				</Link>

				<Button flex="1" variant="ghost">
					Demo Link
				</Button>
				<Button flex="1" variant="ghost">
					Dev Diary
				</Button>
			</CardFooter>
		</Card>
	);
};

export default SingleProject;
