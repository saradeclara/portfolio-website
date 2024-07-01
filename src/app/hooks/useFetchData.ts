"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface FetchResult<T> {
	data: T | null;
	isLoading: boolean;
	error: Error | null;
}

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
