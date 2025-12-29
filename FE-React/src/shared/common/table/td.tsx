import type { ReactNode } from "react";

interface tdProps {
	children: ReactNode;
	className?: string;
}

const TD = ({ children, className }: tdProps) => {
	return <td className={`${className} text-left p-4`}>{children}</td>;
};

export default TD
