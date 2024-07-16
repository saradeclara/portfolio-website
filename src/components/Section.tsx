"use client";
import { Heading, Box } from "@chakra-ui/react";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { centeredFlex } from "../styles/globalClasses";
import useScrollPosition from "../app/hooks/useScrollPosition";
import { SectionContext } from "../context/SectionContext";
import "../styles/globals.css";

const scrollRanges: { range: number[]; label: number }[] = [
	{
		range: [0, 569],
		label: 0,
	},
	{
		range: [570, 1374],
		label: 1,
	},
	{
		range: [1375, 1733],
		label: 2,
	},
	{
		range: [1734, 2000],
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
	const { setCurrentSection } = useContext(SectionContext);

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
						color: "white",
						marginBottom: "30px",
						fontSize: "60px",
					}}
					as="h2"
				>
					<div className="page-heading">{title}</div>
				</Heading>
				<Box>{body}</Box>
			</Box>
		</Box>
	);
};

export default Section;
