import type React from "react";
import Navbar from "./Navbar";

interface MasterLayOut {
	children: React.ReactNode
}

const MasterLayOut = ({ children }: MasterLayOut) => {
	return (
		<div className="bg-white">
			<div>{/* side bar */}</div>
			<div>
				<header>
					<Navbar />
				</header>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default MasterLayOut
