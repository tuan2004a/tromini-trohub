import type React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Theme } from "@radix-ui/themes";

interface MasterLayOut {
	children: React.ReactNode;
}

const MasterLayOut = ({ children }: MasterLayOut) => {
	return (
		<Theme className="flex">
			<div className="max-w-64 w-64 h-dvh border-r border-[#e2e8f0] bg-white fixed top-0 left-0">
				<Sidebar />
			</div>
			<div>
				<header className="border-b border-[#e2e8f0] bg-white fixed w-[calc(100%-256px)] top-0 right-0">
					<Navbar />
				</header>
				<div className="">{children}</div>
			</div>
		</Theme>
	);
};

export default MasterLayOut;
