import { FaDoorOpen, FaEye, FaTrash, FaWifi } from "react-icons/fa";
import TD from "@common/table/td";
import { FaRegPenToSquare } from "react-icons/fa6";
import BtnAction from "@common/button/btnAction";
import { LuAirVent } from "react-icons/lu";
import { memo, useCallback, useMemo, useState } from "react";
import { STATUS_ROOMS, type StatusKeyRoom } from "@/shared/types/status.config";
import StatusOptions from "@common/input/statusOptions";

const Row = memo(() => {
	const [value, setValue] = useState<StatusKeyRoom>("available");

	const statusOption = useMemo(
		() =>
			Object.entries(STATUS_ROOMS).map(([key, item]) => (
				<StatusOptions className={item.checked} key={key} value={key}>
					{item.label}
				</StatusOptions>
			)),
		[]
	);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		const newValue = e.target.value as StatusKeyRoom;
		setValue(newValue);
	}, []);

	return (
		<tr>
			<TD className="font-medium! flex items-center gap-2">
				<div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500">
					<FaDoorOpen className="text-2xl" />
				</div>
				<div>
					<p className="font-bold text-slate-800">P101</p>
					<p className="text-xs text-slate-500">Tầng 1</p>
				</div>
			</TD>
			<TD className="text-slate-500">
				<span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200">Giường 2 tầng</span>
			</TD>
			<TD className=" font-bold!">2.500.000đ</TD>
			<TD>
				<select value={value} onChange={handleChange} className={`${STATUS_ROOMS[value as StatusKeyRoom].className} selectStatus w-30 outline-none rounded-full px-3 py-1.5 text-xs font-semibold border transition-colors `}>
					{statusOption}
				</select>
			</TD>
			<TD className="flex -space-x-3 *:hover:z-999">
				<div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
					<FaWifi className="text-slate-500" />
				</div>
				<div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
					<LuAirVent className="text-slate-500" />
				</div>
			</TD>
			<TD className="space-x-2">
				<BtnAction dataTooltip="Chi tiết" className="bg-yellow-500">
					<FaEye className="text-lg" />
				</BtnAction>
				<BtnAction dataTooltip="Chỉnh sửa" className="bg-[#36fe00]">
					<FaRegPenToSquare className="text-lg" />
				</BtnAction>
				<BtnAction dataTooltip="Xóa" className="bg-red-500 ">
					<FaTrash className="text-lg" />
				</BtnAction>
			</TD>
		</tr>
	);
});

export default Row;
