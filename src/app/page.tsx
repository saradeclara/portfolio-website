"use client";
import { background, Box, extendTheme } from "@chakra-ui/react";
import { centeredFlex } from "../styles/globalClasses";
import Jumbotron from "@/components/Jumbotron";
import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import DevBlog from "../components/DevBlog/DevBlog";
import Contact from "../components/Contact";
import Section from "../components/Section";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import Navbar from "../components/Navbar";
import { SectionContext } from "../context/SectionContext";
import Footer from "../components/Footer";

const sections: {
	title: string;
	body: ReactNode;
	background?: string | undefined;
	backgroundColor: string;
}[] = [
	{
		title: "projects",
		body: <ProjectGrid />,
		background: undefined,
		backgroundColor: "rgba(13,13,13,1)",
	},
	{
		title: "dev blog",
		body: <DevBlog />,
		background: undefined,
		backgroundColor: "rgba(25,25,25,.9)",
	},
	{
		title: "contact",
		body: <Contact />,
		background: undefined,
		backgroundColor: "rgba(13,13,13,1)",
	},
];

function Home() {
	const [currentSection, setCurrentSection] = useState(0);

	return (
		<>
			<SectionContext.Provider value={{ currentSection, setCurrentSection }}>
				<Navbar />
				<Box
					sx={{
						...centeredFlex,
						flexDirection: "column",
					}}
				>
					<Jumbotron />
					{sections.map(
						({ title, body, background, backgroundColor }, index) => {
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
						}
					)}
				</Box>
				<Footer />
			</SectionContext.Provider>
		</>
	);
}

export default Home;
