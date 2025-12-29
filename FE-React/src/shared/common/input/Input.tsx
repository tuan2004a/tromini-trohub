interface inputProps {
	type: string;
	value?: string;
	className?: string;
	placeholder?: string
}

const Input = ({ type, value, className, placeholder }: inputProps) => {
	return <input type={type} value={value} placeholder={placeholder} className={`${className} outline-none border border-slate-200 w-full rounded-lg py-2 px-3 text-sm`} />;
};

export default Input;
