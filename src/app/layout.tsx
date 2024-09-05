import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Provider";
import Layout from "@/components/layout";
import { DESCRIPTION, TITLE } from "@/consts";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
			>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
