import type { ReactNode } from "react";

interface statuProps {
	children: ReactNode;
	className?: string;
	classCircle?: string
}

const StatusBadge = ({ children, className, classCircle }: statuProps) => {
	return (
		<div className={`${className} inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border`}>
			<span className={`${classCircle} size-1.5 rounded-full bg-red-500`}></span>
			{children}
		</div>
	);
};

export default StatusBadge
