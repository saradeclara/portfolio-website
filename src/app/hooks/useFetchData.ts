"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface FetchResult<T> {
	data: T | null;
	isLoading: boolean;
	error: Error | null;
}

/**
 * The `useFetchData` function is a custom hook in TypeScript that fetches data from a specified URL
 * using axios and returns the data, loading state, and error.
 * @param {string} url - The `url` parameter is a string that represents the URL from which data will
 * be fetched using an HTTP GET request.
 * @returns The `useFetchData` function returns an object with three properties: `data`, `isLoading`,
 * and `error`. These properties represent the fetched data, loading state, and any error that occurred
 * during the fetch operation, respectively.
 */
const useFetchData = <T>(url: string): FetchResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				setError(error as Error);
			}
		};

		fetchData();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetchData;
