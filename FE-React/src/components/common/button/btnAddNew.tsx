import { type ReactNode } from "react";

import { IoAddSharp } from "react-icons/io5";

interface btnProps {
	className?: string;
	children?: ReactNode;
}

const BtnAddNew = ({ children, className }: btnProps) => {
	return (
		<button className={`${className} flex gap-x-0.5 cursor-pointer items-center bg-[#137fec] text-white py-3 px-4 font-semibold text-[15px] rounded-xl`}>
			<IoAddSharp className="text-2xl" />
			{children}
		</button>
	);
};

export default BtnAddNew;
