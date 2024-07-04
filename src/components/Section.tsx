import { Heading, Box, Divider, AbsoluteCenter } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import capitaliseEveryChar from "../helpers/capitaliseEveryChar";
import { centeredFlex } from "../app/globalClasses";

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
