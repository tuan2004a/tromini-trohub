import type React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SIdebar";

interface MasterLayOut {
	children: React.ReactNode;
}

const MasterLayOut = ({ children }: MasterLayOut) => {
	return (
		<div className="bg-white">
			<div>
				<Sidebar />
			</div>
			<div>
				<header>
					<Navbar />
				</header>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default MasterLayOut;
