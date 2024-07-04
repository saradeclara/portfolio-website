import { Text, Box } from "@chakra-ui/react";
import React from "react";
import { DM_Serif_Display } from "next/font/google";
import "../styles/globals.css";
import useSmoothScroll from "../app/hooks/useSmoothScroll";

const Jumbotron = () => {
	const scrollToSection = useSmoothScroll();
	return (
		<Box
			id="home"
			sx={{
				width: "100vw",
				height: "650px",
				background: "rgba(0,0,0,.85)",
			}}
		>
			<Box sx={{ marginTop: "170px", padding: "0px 200px" }}>
				<Box sx={{ width: "600px" }}>
					<div className="main-heading dm-serif-display-regular text-shadow">
						<Box fontSize="70px" color="rgba(255,255,255,.7)">
							{"Hello, I'm Sara."}
						</Box>
					</div>
					<Box fontSize="19px" color="rgba(255,255,255,.4)">
						<Box>
							I am a passionate{" "}
							<span className="span-display-text">Software Developer</span>,
							specializing in modern web development technologies, particularly{" "}
							<span className="span-display-text">React.js</span> and{" "}
							<span className="span-display-text">Next.js</span>.
						</Box>

						<Box sx={{ margin: "20px 0px" }}>
							Driven by a passion for problem-solving and creating seamless user
							experiences, my work revolves around designing and building
							interactive user interfaces.
						</Box>
						<Box>
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
		</Box>
	);
};

export default Jumbotron;
