import { blogPostBg, textColor } from "./colors";

const centeredFlex = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const navbarMargins = {
	marginTop: 5,
	marginRight: 10,
};

const borderRadius = "15px";

const loadingPostsStyle = {
	margin: "0 auto",
	padding: "20px",
	background: blogPostBg,
	textAlign: "center",
	borderRadius: borderRadius,
	color: textColor,
};

export { centeredFlex, navbarMargins, borderRadius, loadingPostsStyle };
