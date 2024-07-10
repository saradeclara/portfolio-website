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
 * with optional token authentication and returns the fetched data, loading state, and any errors
 * encountered.
 * @param {string} url - The `url` parameter is a string that represents the URL from which data will
 * be fetched.
 * @param {string} token - The `token` parameter in the `useFetchData` function is a string that
 * represents an authentication token. This token is used to authenticate the user when making a
 * request to the specified URL. If a token is provided, it is included in the request headers for
 * authorization.
 * @returns The `useFetchData` function returns an object with three properties: `data`, `isLoading`,
 * and `error`. These properties represent the fetched data, loading state, and any error that occurred
 * during the fetch operation, respectively.
 */
const useFetchData = <T>(url: string, token?: string): FetchResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response;
				if (token) {
					response = await axios.get(url, {
						headers: {
							Authorization: `token ${token}`,
						},
					});
				} else {
					response = await axios.get(url);
				}
				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				setError(error as Error);
			}
		};

		fetchData();
	}, [url, token]);

	return { data, isLoading, error };
};

export default useFetchData;
