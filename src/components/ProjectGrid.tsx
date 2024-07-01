"use client";
import useFetchData from "@/app/hooks/useFetchData";
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

const allowedRepos: { name: string; description: string }[] = [
	{
		name: "spotify-clone",
		description:
			"This project is a web application built with Next.js that emulates the core functionalities of Spotify. It features a sleek user interface for browsing and playing music, user authentication, playlist management, and real-time search. This project highlights my skills in front-end development, server-side rendering, API integration, and managing state in a Next.js environment.",
	},
	{
		name: "react-calculator",
		description:
			"This project is a web-based application designed to perform basic arithmetic operations. Built with React.js, it features a clean user interface with digit and operation buttons, a dynamic display, and robust state management to handle user inputs and calculations efficiently. This project showcases my skills in React component architecture, state management, and event handling.",
	},
];

type GithubProject = {
	name: string;
	html_url: string;
	node_id: string;
};

const ProjectGrid = () => {
	const { data, isLoading, error } = useFetchData<GithubProject[]>(
		"https://api.github.com/users/saradeclara/repos",
		process.env.GITHUB_TOKEN
	);

	if (isLoading) return <Box>Loading...</Box>;
	if (error) return <Box>ERROR!</Box>;

	const allowedProjects = data
		? [...data].filter((singleRepo) =>
				allowedRepos
					.map((allowedRepo) => allowedRepo.name)
					.includes(singleRepo.name)
		  )
		: null;

	return (
		<Box sx={{ display: "flex" }}>
			{allowedProjects
				? allowedProjects.map((singleProject) => {
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
				  })
				: null}
		</Box>
	);
};

export default ProjectGrid;
