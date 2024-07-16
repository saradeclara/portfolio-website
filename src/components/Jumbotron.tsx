import { Text, Box, Image } from "@chakra-ui/react";
import React from "react";
import "../styles/globals.css";
import useSmoothScroll from "../app/hooks/useSmoothScroll";
import { textColor } from "../styles/colors";
import { centeredFlex } from "../styles/globalClasses";

const Jumbotron = () => {
	const scrollToSection = useSmoothScroll();
	return (
		<>
			<Box
				sx={{
					position: "fixed",
					top: "80px",
					zIndex: "-1",
					left: 0,
					width: "100%",
					height: "100%",
					backgroundSize: "contain",
					alt: "main-background",
				}}
				background="url('/images/background5.jpg')"
			></Box>
			<Box
				id="home"
				sx={{
					width: "100vw",
					height: { base: "auto", xl: "650px" },
					background: "rgba(25,25,25,.9)",
				}}
			>
				<Box
					sx={{
						width: "100%",
						marginTop: "170px",
						padding: { md: "0px 200px", base: "40px" },
						display: "flex",
						flexDirection: { base: "column", md: "unset" },
						textAlign: { base: "center", md: "revert" },
					}}
				>
					<Box sx={{ width: { md: "600px" }, flex: 1 }}>
						<Box>
							<div className="main-heading page-heading text-shadow">
								<Box fontSize={{ md: "70px", base: "50px" }} color={textColor}>
									{"Hello, I'm Sara!"}
								</Box>
							</div>
							<Box
								fontSize={{ base: "17px", xl: "19px" }}
								color="rgba(255,255,255,.4)"
							>
								<Box>
									I am a passionate{" "}
									<span className="span-display-text">Software Developer</span>,
									specializing in modern web development technologies,
									particularly{" "}
									<span className="span-display-text">React.js</span> and{" "}
									<span className="span-display-text">Next.js</span>.
								</Box>

								<Box
									fontSize={{ base: "17px", xl: "19px" }}
									sx={{ margin: "20px 0px" }}
								>
									Driven by a passion for problem-solving and creating seamless
									user experiences, my work revolves around designing and
									building interactive user interfaces.
								</Box>
								<Box
									fontSize={{ base: "17px", xl: "19px" }}
									sx={{ marginBottom: { base: "30px", xl: "0px" } }}
								>
									Feel free to explore{" "}
									<Text
										sx={{
											display: "inline",
											cursor: "pointer",
											textDecoration: "underline",
										}}
										onClick={() => scrollToSection("0")}
									>
										my work
									</Text>{" "}
									and{" "}
									<Text
										sx={{
											display: "inline",
											cursor: "pointer",
											textDecoration: "underline",
										}}
										onClick={() => scrollToSection("2")}
									>
										get in touch
									</Text>
									{
										" if you're interested in collaborating or learning more about me."
									}
								</Box>
							</Box>
						</Box>
					</Box>
					<Box sx={{ flex: 1, ...centeredFlex }}>
						<Image
							src="/images/me-cartoon.png"
							alt="Sara De Clara (Software Developer)"
							width="250px"
							borderRadius="100%"
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Jumbotron;
