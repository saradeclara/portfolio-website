"use client";
import useFetchData from "@/app/hooks/useFetchData";
import { Box } from "@chakra-ui/react";
import LoadingGrid from "./LoadingGrid";
import SingleProject from "./SingleProject";
import { GithubProject } from "@/types/ProjectGrid";
import { allowedRepos } from "@/src/app/data";
import { centeredFlex } from "@/src/app/globalClasses";

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
		<Box sx={{ ...centeredFlex }}>
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
