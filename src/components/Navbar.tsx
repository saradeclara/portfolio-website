import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { sections } from "../app/page";

const Navbar = () => {
	const navbarMargins = {
		marginTop: 5,
		marginRight: 10,
	};
	return (
		<Tabs align="end" variant="soft-rounded" colorScheme="gray">
			<TabList sx={{ ...navbarMargins }}>
				{sections.map((singleSection, index) => {
					return (
						<Link
							key={`${singleSection.title}-${index}`}
							href={index.toString()}
						>
							<Tab>{singleSection.title}</Tab>
						</Link>
					);
				})}
			</TabList>
		</Tabs>
	);
};

export default Navbar;
