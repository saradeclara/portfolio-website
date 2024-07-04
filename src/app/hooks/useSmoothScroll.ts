import { useCallback } from "react";

const useSmoothScroll = (): ((itemId: string) => void) => {
	const scrollToSection = useCallback((itemId: string): void => {
		const item: HTMLElement | null = document.getElementById(itemId);

		if (item) {
			item.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return scrollToSection;
};

export default useSmoothScroll;
