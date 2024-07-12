import Navbar from "@/src/components/Navbar";
import PostNavbar from "@/src/components/PostNavbar";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PostLayoutProps {
	children: ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps): JSX.Element {
	return (
		<>
			<PostNavbar />
			<Box paddingTop="80px">{children}</Box>
		</>
	);
}
