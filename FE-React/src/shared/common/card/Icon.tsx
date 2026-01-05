import type { ReactNode } from "react";

type IconSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number;

interface IconProps {
	children?: ReactNode;
	className?: string;
	size?: IconSize;
}

// Update sizeClasses to have string values
const sizeClasses: Record<IconSize, string> = {
	1: "size-1", // 4px
	2: "size-2", // 8px
	3: "size-3", // 12px
	4: "size-4", // 16px
	5: "size-5", // 20px
	6: "size-6", // 24px
	7: "size-8", // 32px
	8: "size-10", // 40px
	9: "size-12", // 48px
	10: "size-14", // 56px or any other additional size
};

const Icon = ({ children, className, size = 6 }: IconProps) => {
	return <div className={`${sizeClasses[size]} ${className} rounded-full bg-white border border-slate-200 flex items-center justify-center`}>{children}</div>;
};

export default Icon;
