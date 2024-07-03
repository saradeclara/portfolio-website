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
import LoadingGrid from "./LoadingGrid";
import SingleProject from "./SingleProject";
import { GithubProject } from "@/types/ProjectGrid";
import { allowedRepos } from "@/src/app/data";

const ProjectGrid = () => {
	const { data, isLoading, error } = useFetchData<GithubProject[]>(
		"https://api.github.com/users/saradeclara/repos",
		process.env.GITHUB_TOKEN
	);

	if (isLoading)
		return (
			<Box>
				<LoadingGrid />
			</Box>
		);
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
				? allowedProjects.map((singleProject, index) => {
						return (
							<SingleProject
								key={index}
								allowedRepos={allowedRepos}
								singleProject={singleProject}
							/>
						);
				  })
				: null}
		</Box>
	);
};

export default ProjectGrid;
