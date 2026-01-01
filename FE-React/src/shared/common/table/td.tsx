import type { ReactNode, TdHTMLAttributes } from "react";

interface tdProps extends TdHTMLAttributes<HTMLTableCellElement> {
	children: ReactNode;
	className?: string;
}

const TD = ({ children, className, ...props }: tdProps) => {
	return (
		<td {...props} className={`${className} text-left p-4`}>
			{children}
		</td>
	);
};

export default TD
