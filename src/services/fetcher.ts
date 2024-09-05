import { BASE_URL } from "@/consts";
import axios from "axios";

// make sure to have
export const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
