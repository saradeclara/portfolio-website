import {
	Box,
	Button,
	Link,
	ListItem,
	OrderedList,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { centeredFlex } from "../app/globalClasses";

const Contact = () => {
	return (
		<Box
			margin="0 auto"
			color="rgba(255,255,255,.7)"
			width="700px"
			height="500px"
			textAlign="center"
		>
			<Box sx={{ marginBottom: "10px" }}>
				Whether you have a question, want to discuss a project, <br />
				or just want to say hi, feel free to drop me a message.
			</Box>
			<OrderedList styleType="none" marginBottom="10px">
				<ListItem>
					<Box sx={{ ...centeredFlex, padding: "10px 0px" }}>
						<Link href="mailto:saradeclara@gmail.com">
							<Button colorScheme="teal">
								<MdEmail />
								<Text
									padding="0px 5px 0px 10px"
									display="inline"
									fontWeight="bold"
								>
									Email
								</Text>
							</Button>
						</Link>
					</Box>
				</ListItem>
				<ListItem>
					<Box sx={{ ...centeredFlex, padding: "10px 0px" }}>
						<Link href="https://www.linkedin.com/in/saradeclara/">
							<Button colorScheme="blue">
								<FaLinkedin />
								<Text
									padding="0px 5px 0px 10px"
									display="inline"
									fontWeight="bold"
								>
									LinkedIn
								</Text>
							</Button>
						</Link>
					</Box>
				</ListItem>
				<ListItem>
					<Box sx={{ ...centeredFlex, padding: "10px 0px" }}>
						<Link href="https://github.com/saradeclara">
							<Button _hover={{ background: "darkgray" }} colorScheme="gray">
								<FaGithub />
								<Text
									padding="0px 5px 0px 10px"
									display="inline"
									fontWeight="bold"
								>
									Github
								</Text>
							</Button>
						</Link>
					</Box>
				</ListItem>
			</OrderedList>
			<Box sx={{ marginBottom: "20px" }}>
				I am currently open to new opportunities and collaborations.
				<br /> I am based in Manchester, UK (GMT), <br />
				but I am open to remote opportunities as well.
			</Box>
			<Box sx={{ marginBottom: "10px" }}>
				Looking forward to hearing from you!
			</Box>
		</Box>
	);
};

export default Contact;
