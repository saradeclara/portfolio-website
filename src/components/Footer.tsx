import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { centeredFlex } from "../styles/globalClasses";
import { FaRegCopyright } from "react-icons/fa";
import { textColor } from "../styles/colors";

const Footer = () => {
	return (
		<Box
			sx={{
				height: "100px",
				background: "black",
				color: textColor,
				...centeredFlex,
			}}
		>
			<Box
				sx={{
					fontSize: "14px",
					textAlign: "center",
					alignItems: "center",
					display: "flex",
				}}
			>
				<Box sx={{ ...centeredFlex }}>
					<FaRegCopyright />
					<Text padding="0" marginLeft="5px">
						Sara De Clara (Software Developer)
					</Text>
				</Box>
				<Text sx={{ margin: "0px 5px 0px 5px", padding: 0, display: "block" }}>
					2024
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;
