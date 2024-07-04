"use client";
import { background, Box, extendTheme } from "@chakra-ui/react";
import { centeredFlex } from "./globalClasses";
import Jumbotron from "@/components/Jumbotron";
import { ReactNode, useEffect } from "react";
import DevBlog from "../components/DevBlog/DevBlog";
import Contact from "../components/Contact";
import Section from "../components/Section";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";

const sections: {
	title: string;
	body: ReactNode;
	background?: string | undefined;
	backgroundColor: string;
}[] = [
	{
		title: "projects",
		body: <ProjectGrid />,
		background: "url('/images/background1.jpg')",
		backgroundColor: "black",
	},
	{
		title: "dev blog",
		body: <DevBlog />,
		background: undefined,
		backgroundColor: "rgba(0,0,0,.85)",
	},
	{
		title: "contact",
		body: <Contact />,
		background: "url('/images/background1.jpg')",
		backgroundColor: "black",
	},
];

function Home() {
	return (
		<Box
			sx={{
				...centeredFlex,
				flexDirection: "column",
			}}
		>
			<Jumbotron />
			{sections.map(({ title, body, background, backgroundColor }, index) => {
				return (
					<Section
						key={index.toString()}
						index={index.toString()}
						title={title}
						body={body}
						background={background}
						backgroundColor={backgroundColor}
					/>
				);
			})}
		</Box>
	);
}

export default Home;
