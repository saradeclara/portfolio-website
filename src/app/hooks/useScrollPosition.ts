import { useEffect, useState } from "react";

const useScrollPosition = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// Update the scroll position when the component mounts
		handleScroll();

		// Add the event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollY;
};

export default useScrollPosition;
