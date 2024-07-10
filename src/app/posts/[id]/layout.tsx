import Navbar from "@/src/components/Navbar";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PostLayoutProps {
	children: ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps): JSX.Element {
	return (
		<>
			<Navbar />
			<Box paddingTop="80px">{children}</Box>
		</>
	);
}
