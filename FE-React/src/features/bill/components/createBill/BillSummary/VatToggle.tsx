import { BtnToggle } from "@common/button/Index";

const VatToggle = () => {
	return (
		<div className="pt-3 space-y-3">
			<div className="flex justify-between items-center">
				<label className="text-sm text-slate-700  font-medium">Giảm giá</label>
				<div className="relative w-32">
					<input className="w-full h-8 pl-2 pr-8 text-right text-sm rounded border border-slate-300 bg-white focus:ring-1 focus:ring-primary outline-none" type="text" value="0" />
					<span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-500">đ</span>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<label className="inline-flex items-center cursor-pointer">
                    <BtnToggle/>
					<span className="ms-3 text-sm font-medium text-slate-700">VAT (8%)</span>
				</label>
				<span className="text-sm font-medium text-slate-400">0 đ</span>
			</div>
		</div>
	);
};

export default VatToggle;
