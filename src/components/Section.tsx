"use client";
import { Heading, Box } from "@chakra-ui/react";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import capitaliseEveryChar from "../helpers/capitaliseEveryChar";
import { centeredFlex } from "../app/globalClasses";
import useScrollPosition from "../app/hooks/useScrollPosition";
import { SectionContext } from "../app/page";

const scrollRanges: { range: number[]; label: number }[] = [
	{
		range: [0, 569],
		label: 0,
	},
	{
		range: [570, 1441],
		label: 1,
	},
	{
		range: [1442, 1859],
		label: 2,
	},
	{
		range: [1860, 2000],
		label: 3,
	},
];

const Section = ({
	index,
	title,
	body,
	background,
	backgroundColor,
}: {
	index: string;
	title: string;
	body: ReactNode;
	background?: string;
	backgroundColor: string;
}) => {
	const scrollY = useScrollPosition();
	const { currentSection, setCurrentSection } = useContext(SectionContext);
	// console.log({ currentSection });
	useEffect(() => {
		scrollRanges.forEach(({ range, label }) => {
			if (scrollY >= range[0] && scrollY <= range[1]) {
				setCurrentSection(label);
			}
		});
	}, [scrollY, setCurrentSection]);
	return (
		<Box
			background={background}
			backgroundColor={backgroundColor}
			width="100vw"
			padding="50px 100px"
		>
			<Box id={index.toString()} key={index}>
				<Heading
					sx={{
						...centeredFlex,
						marginTop: "0px",
						marginBottom: "50px",
						color: "white",
						fontSize: "60px",
					}}
					as="h2"
				>
					{capitaliseEveryChar(title)}
				</Heading>
				<Box>{body}</Box>
			</Box>
		</Box>
	);
};

export default Section;
