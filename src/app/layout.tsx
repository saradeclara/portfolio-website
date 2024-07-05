// "use client";
import Navbar from "@/components/Navbar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "../styles/globals.css";
import { createContext, Dispatch, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sara De Clara - Software Developer",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraProvider>{children}</ChakraProvider>
			</body>
		</html>
	);
}
