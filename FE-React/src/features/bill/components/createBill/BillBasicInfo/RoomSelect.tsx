import OptionFilter from "@/shared/common/input/optionFilter";
import Select from "@/shared/common/input/select";

const RoomSelect = () => {
	return (
		<div className="w-full">
			<label className="text-sm text-slate-500" htmlFor="roomSelect">
				Số phòng
			</label>
			<Select id="roomSelect" className="w-full outline-none border-slate-200 font-normal! mt-1 py-2 *:py-2 *:px-2">
				<OptionFilter>Chọn phòng:</OptionFilter>
				<OptionFilter>P101</OptionFilter>
				<OptionFilter>P102</OptionFilter>
				<OptionFilter>P103</OptionFilter>
			</Select>
		</div>
	);
};

export default RoomSelect;
