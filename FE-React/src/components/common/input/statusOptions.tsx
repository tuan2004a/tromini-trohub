import type { ReactNode } from "react";

interface statusOptionsProps {
	children: ReactNode;
	value?: string;
	selected?: boolean;
	className?: string
}

const StatusOptions = ({ children, value, selected, className }: statusOptionsProps) => {
	return (
		<option selected={selected} value={value} className={`${className} text-black font-medium hover:bg-[#137fec] hover:text-white! checked:font-semibold!`}>
			{children}
		</option>
	);
};

export default StatusOptions;
