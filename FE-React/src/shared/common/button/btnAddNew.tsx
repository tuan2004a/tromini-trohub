import { type ReactNode } from "react";

import { IoAddSharp } from "react-icons/io5";

interface btnProps {
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
	iconName?: ReactNode;
}

const BtnAddNew = ({ children, className, onClick, iconName = <IoAddSharp className="text-2xl" /> }: btnProps) => {
	return (
		<button onClick={onClick} className={`${className} flex gap-x-0.5 cursor-pointer items-center bg-[#137fec] text-white py-3 px-4 font-semibold text-[15px] rounded-xl`}>
			{iconName}
			{children}
		</button>
	);
};

export default BtnAddNew;
