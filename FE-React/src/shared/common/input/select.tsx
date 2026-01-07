import type { ReactNode } from "react";

interface selectProps {
	children: ReactNode;
	value?: string;
	className?: string;
	name?: string;
	id?: string
}

const Select = ({ children, className, name, id }: selectProps) => {
	return (
		<select id={id} name={name} className={`${className} outline-none py-2 px-3 text-sm rounded-lg font-semibold border transition-colors `}>
			{children}
		</select>
	);
};

export default Select;
