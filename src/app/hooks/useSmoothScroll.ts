import { useCallback } from "react";

/**
 * The function `useSmoothScroll` returns a callback function that scrolls to a specified element with
 * smooth behavior when called.
 * @returns A function that takes a string parameter `itemId` and scrolls to the element with the
 * corresponding `id` in a smooth manner.
 */
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
