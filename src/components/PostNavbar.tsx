"use client";
import { Tabs, TabList, Tab, Box, Text } from "@chakra-ui/react";
import React from "react";
import { navbarMargins } from "../styles/globalClasses";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
const PostNavbar = () => {
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
				variant="soft-rounded"
				colorScheme="gray"
				sx={{ ...navbarMargins, marginLeft: 5 }}
			>
				<TabList>
					<Tab>
						<Link href="/">
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<IoMdArrowRoundBack />
								<Text sx={{ margin: 0, padding: 0 }}>
									Back to Portfolio Website
								</Text>
							</Box>
						</Link>
					</Tab>
				</TabList>
			</Tabs>
			{/* <Tabs
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
			</Tabs> */}
		</Box>
	);
};

export default PostNavbar;
