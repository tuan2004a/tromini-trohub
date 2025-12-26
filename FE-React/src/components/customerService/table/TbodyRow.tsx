import { FaEye, FaTrash, FaWifi } from "react-icons/fa";
import TD from "@common/table/td";
import { FaRegPenToSquare } from "react-icons/fa6";
import BtnAction from "@common/button/btnAction";
import StatusOptions from "@common/input/statusOptions";
import { memo, useCallback, useMemo, useState } from "react";
import { STATUS_CUSTOMER_SERVICE, type StatusKeyService } from "@/shared/types/status.config";

const TbodyRow = memo(() => {
	const [value, setValue] = useState<StatusKeyService>("active");

	const statusOption = useMemo(
		() =>
			Object.entries(STATUS_CUSTOMER_SERVICE).map(([key, item]) => (
				<StatusOptions className={item.checked} key={key} value={key}>
					{item.label}
				</StatusOptions>
			)),
		[]
	);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		const newValue = e.target.value as StatusKeyService;
		setValue(newValue);
	}, []);

	return (
		<tr>
			<TD className="font-medium! flex items-center gap-2">
				<div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
					<img src="#" alt="dịch vụ" />
				</div>
				<p className="font-semibold text-slate-600">Internet</p>
			</TD>
			<TD className="text-slate-500">
				<div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
					<FaWifi className="text-slate-500" />
				</div>
			</TD>
			<TD className="font-bold!">100.000đ</TD>
			<TD className="text-sm underline decoration-sky-500 decoration-2 underline-offset-2 text-slate-500">Phòng / tháng</TD>
			<TD className="text-slate-500 max-w-[200px] truncate">Gói cước 5G tốc độ cao</TD>
			<TD>
				<select value={value} onChange={handleChange} className={`${STATUS_CUSTOMER_SERVICE[value as StatusKeyService].className} selectStatus w-30 outline-none rounded-full px-3 py-1.5 text-xs font-semibold border transition-colors `}>
					{statusOption}
				</select>
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

export default TbodyRow;
