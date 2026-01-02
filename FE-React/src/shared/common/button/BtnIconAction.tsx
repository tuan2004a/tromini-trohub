import { type ReactNode } from "react";

interface BtnIconActionProps {
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
	iconName?: ReactNode;
}

const BtnIconAction = ({ children, className, onClick }: BtnIconActionProps) => {
	return (
		<button onClick={onClick} className={`${className} flex-center gap-x-2 cursor-pointer py-3 px-4.5 font-medium rounded-xl border focus:ring-2`}>
			{children}
		</button>
	);
};

export default BtnIconAction;
