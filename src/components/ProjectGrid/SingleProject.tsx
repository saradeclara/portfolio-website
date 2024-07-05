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
	Link,
} from "@chakra-ui/react";
import React from "react";

const SingleProject = ({
	singleProject,
	allowedRepos,
}: {
	singleProject: GithubProject;
	allowedRepos: AllowedRepo[];
}) => {
	const currentAllowedRepoInfo = allowedRepos.find(
		(singleRepo) => singleRepo.name === singleProject.name
	);

	return (
		<Card
			color="rgba(255,255,255,.7)"
			key={singleProject.node_id}
			marginRight={5}
			background="rgb(30, 30, 30)"
			opacity="0.77"
			height="650px"
			maxW="sm"
		>
			<CardBody>
				<Image
					src={currentAllowedRepoInfo?.thumbnail}
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">
						<Link
							_hover={{ textDecoration: "underline" }}
							target="_blank"
							href={singleProject.html_url}
						>
							{singleProject.name}
						</Link>
					</Heading>
					<Text>{currentAllowedRepoInfo?.description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter
				justify="space-between"
				flexWrap="wrap"
				height="120px"
				sx={{
					"& > button": {
						minW: "136px",
					},
				}}
			>
				<Button colorScheme="teal" flex="1" variant="ghost">
					<Link target="_blank" href={singleProject.html_url}>
						Repo Link
					</Link>
				</Button>
				{currentAllowedRepoInfo?.demoLink ? (
					<Button colorScheme="teal" flex="1" variant="ghost">
						<Link target="_blank" href={currentAllowedRepoInfo.demoLink}>
							Demo Link
						</Link>
					</Button>
				) : null}

				{currentAllowedRepoInfo?.devDiaryIndex ? (
					<Button colorScheme="teal" flex="1" variant="ghost">
						<Link
							target="_blank"
							href={`/posts/${currentAllowedRepoInfo.devDiaryIndex}`}
						>
							Dev Diary
						</Link>
					</Button>
				) : null}
			</CardFooter>
		</Card>
	);
};

export default SingleProject;
