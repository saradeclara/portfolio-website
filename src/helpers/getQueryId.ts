/**
 * The function `getQueryId` extracts the last element from a URL string based on the '/' delimiter.
 * @param {string} url - The `url` parameter is a string representing a URL.
 * @returns The function `getQueryId` returns the last element of an array obtained by splitting the
 * input `url` string by the '/' character.
 */
const getQueryId = (url: string) => {
	const stringToArray = url.split("/");
	const lastElement = stringToArray.length - 1;
	return stringToArray[lastElement];
};

export default getQueryId;
