interface inputProps {
	type: string;
	value?: string;
	className?: string;
	placeholder?: string;
	id?: string;
}

const Input = ({ type, value, className, placeholder, id }: inputProps) => {
	return <input id={id} type={type} value={value} placeholder={placeholder} className={`${className} outline-none border border-slate-200 w-full rounded-lg py-2 px-3 text-sm`} />;
};

export default Input;
