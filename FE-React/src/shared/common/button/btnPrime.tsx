import { type ReactNode } from "react";

interface btnProps {
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
	
}

const BtnPrime = ({ children, className, onClick }: btnProps) => {
	return (
		<button onClick={onClick} className={`${className} cursor-pointer border border-gray-200 py-3 px-3.5 font-semibold text-sm whitespace-nowrap rounded-[10px] transition-all duration-200 hover:bg-black hover:text-white`}>
			{children}
		</button>
	);
};

export default BtnPrime;
