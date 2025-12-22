import Select from "@common/input/select";
import OptionFilter from "@common/input/optionFilter";
const AdvancedFilterPanel = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
			<Select className="selectFilter font-normal! rounded-lg py-2! px-3! text-sm! border-slate-300">
				<OptionFilter value="" className="p-2 ">
					Trạng thái: Tất cả
				</OptionFilter>
				<OptionFilter value="" className="p-2">
					Đã thanh toán
				</OptionFilter>
				<OptionFilter value="" className="p-2">
					Chưa thanh toán
				</OptionFilter>
				<OptionFilter value="" className="p-2">
					Trễ thanh toán
				</OptionFilter>
			</Select>
			<Select className="selectFilter font-normal! rounded-lg py-2! px-3! text-sm! border-slate-300">
				<OptionFilter value="" className="p-2 ">
					Trạng thái: Tất cả
				</OptionFilter>
				<OptionFilter value="" className="p-2">
					Đã thanh toán
				</OptionFilter>
				<OptionFilter value="" className="p-2">
					Chưa thanh toán
				</OptionFilter>
				<OptionFilter value="" className="p-2">
					Trễ thanh toán
				</OptionFilter>
			</Select>

			<div>
				<input type="month" className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition" />
			</div>
		</div>
	);
};

export default AdvancedFilterPanel;
