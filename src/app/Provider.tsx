"use client";
import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<SWRConfig
			value={{ fetcher, refreshInterval: 3000, revalidateOnReconnect: true }}
		>
			{children}
		</SWRConfig>
	);
}
