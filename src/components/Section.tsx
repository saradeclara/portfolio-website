import { Heading, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

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
			<Heading as="h2">{title}</Heading>
			<Box>{body}</Box>
		</Box>
	);
};

export default Section;
