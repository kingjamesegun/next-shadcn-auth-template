import useSWR from "swr";
import fetcher from "../fetcher";

// sample of a swr hook
export function useUser() {
	const { data, error, isLoading } = useSWR("/v1/user", fetcher);

	return {
		user: data,
		isLoading,
		isError: error,
	};
}
