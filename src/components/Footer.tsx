import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { centeredFlex } from "../styles/globalClasses";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
	return (
		<Box
			sx={{
				height: "100px",
				background: "black",
				color: "rgba(255,255,255,.7)",
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
					<Text marginLeft="5px">Sara De Clara (Software Developer)</Text>
				</Box>
				<Text sx={{ margin: "0px 5px 0px 5px", display: "block" }}>2024</Text>
			</Box>
		</Box>
	);
};

export default Footer;
