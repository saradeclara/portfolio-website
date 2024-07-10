"use client";
import { Tabs, TabList, Tab, Link, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import useSmoothScroll from "../app/hooks/useSmoothScroll";
import { SectionContext } from "../context/SectionContext";
import { navbarItems } from "../app/data";
import { navbarMargins } from "../styles/globalClasses";

const Navbar = () => {
	const scrollToSection = useSmoothScroll();
	const { currentSection, setCurrentSection } = useContext(SectionContext);

	return (
		<Box
			sx={{
				position: "fixed",
				background: "rgba(0,0,0,.8)",
				width: "100vw",
				zIndex: "1000",
				paddingBottom: "20px",
			}}
		>
			<Tabs
				index={currentSection}
				align="end"
				variant="soft-rounded"
				colorScheme="gray"
			>
				<TabList sx={{ ...navbarMargins }}>
					{navbarItems.map((singleSection, index) => {
						return (
							<Tab
								key={`${singleSection}-${index}`}
								isFocusable
								onClick={() => scrollToSection(singleSection.sectionId)}
							>
								{singleSection.title}
							</Tab>
						);
					})}
				</TabList>
			</Tabs>
		</Box>
	);
};

export default Navbar;
