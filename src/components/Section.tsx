import { Heading, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import capitaliseEveryChar from "../helpers/capitaliseEveryChar";
import { centeredFlex } from "../app/globalClasses";

const Section = ({
	index,
	title,
	body,
}: {
	index: string;
	title: string;
	body: ReactNode;
}) => {
	return (
		<Box id={index.toString()} key={index}>
			<Heading sx={{ ...centeredFlex, padding: "20px 0px" }} as="h2">
				{capitaliseEveryChar(title)}
			</Heading>
			<Box>{body}</Box>
		</Box>
	);
};

export default Section;
