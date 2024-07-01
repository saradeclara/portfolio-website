import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	const navbarMargins = {
		marginTop: 5,
		marginRight: 10,
	};
	return (
		<Tabs align="end" variant="soft-rounded" colorScheme="gray">
			<TabList sx={{ ...navbarMargins }}>
				{["projects", "dev blog", "contact"].map((singleSection, index) => {
					return (
						<Link key={`${singleSection}-${index}`} href={index.toString()}>
							<Tab>{singleSection}</Tab>
						</Link>
					);
				})}
			</TabList>
		</Tabs>
	);
};

export default Navbar;
