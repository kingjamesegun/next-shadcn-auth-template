import React from "react";
import { SignInButton } from "@/components/auth";

const Header = () => {
	return (
		<nav className="flex p-5 md:px-20 items-center justify-between">
			<h1>Header</h1>
			<SignInButton />
		</nav>
	);
};

export default Header;
