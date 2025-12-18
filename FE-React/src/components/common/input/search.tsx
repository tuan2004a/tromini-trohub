import type { ChangeEvent, FormEvent } from "react";
import { CiSearch } from "react-icons/ci";


interface SearchInputProps {
	value?: string;
	onChange?: (value: string) => void | undefined;
	onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
	placeholder?: string;
	className?: string
}

const Search = ({ value, onChange, placeholder = "Tìm kiếm...", className }: SearchInputProps) => {
	return (
		<form className={`${className} hidden lg:flex relative w-100 group `}>
			<CiSearch className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
			<input type="text" value={value} placeholder={placeholder} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)} className={` w-full h-11 pl-10 pr-4 rounded-xl bg-slate-100 border outline-none border-transparent hover:border-[#137fec]/20 focus:bg-white focus:border-[#137fec] focus:ring-3 focus:ring-[#137fec]/20 transition-all text-sm text-slate-900 placeholder-slate-400`} />
		</form>
	);
};

export default Search;
