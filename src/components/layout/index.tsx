import React, { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<div className="mx-auto mmt-[116px] w-full max-w-screen-xl md:mt-[72px]">
				{children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
