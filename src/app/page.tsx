import { Box } from "@chakra-ui/react";
import { centeredFlex } from "./globalClasses";
import Jumbotron from "@/components/Jumbotron";
import ProjectGrid from "@/components/ProjectGrid";
import { ReactNode } from "react";
import DevBlog from "../components/DevBlog";
import Contact from "../components/Contact";
import Section from "../components/Section";

const sections: { title: string; body: ReactNode }[] = [
	{
		title: "projects",
		body: <ProjectGrid />,
	},
	{
		title: "dev blog",
		body: <DevBlog />,
	},
	{
		title: "contact",
		body: <Contact />,
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
			{sections.map(({ title, body }, index) => {
				return (
					<Section
						key={index.toString()}
						index={index.toString()}
						title={title}
						body={body}
					/>
				);
			})}
		</Box>
	);
}

export default Home;
