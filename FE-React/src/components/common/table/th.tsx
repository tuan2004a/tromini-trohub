import type React from "react";
import type { ReactNode } from "react";

interface thead {
	children: ReactNode;
	className?: string
}

const TH: React.FC<thead> = ({ children, className }) => {
	return (
		<th
			className={`${className} text-left p-4 font-semibold text-slate-400 bg-slate-50/80`}
		>
			{children}
		</th>
	);
};

export default TH;
