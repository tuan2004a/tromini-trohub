import type { ReactNode } from "react";

interface optionFilterProps {
    children: ReactNode;
    value?: string;
    selected?: boolean;
    className?: string
}

const OptionFilter = ({ children, selected, value, className }: optionFilterProps) => {
	return (
		<option selected={selected} value={value} className={`${className} text-black font-medium hover:bg-[#137fec] hover:text-white! checked:bg-slate-300 checked:font-semibold!`}>
			{children}
		</option>
	);
};

export default OptionFilter
