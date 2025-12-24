import { FaEye, FaTrash } from "react-icons/fa";
import TD from "@common/table/td";
import { FaRegPenToSquare } from "react-icons/fa6";
import BtnAction from "@common/button/btnAction";
import StatusBadge from "@common/card/statusBadge";
import BtnToggle from "@common/button/btnToggle";

const Row = () => {
	return (
		<tr>
			<TD className="font-medium! flex items-center gap-2">
				<div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
					<img src="#" alt="dịch vụ" />
				</div>
				<p className="font-semibold text-slate-700">Nguyễn Văn A</p>
			</TD>
			<TD>
				<p className="font-mono! text-lg text-slate-700">123 456 7890</p>
				<p className="text-[13px] text-slate-400">vana.nguyen@email.com</p>
			</TD>
			<TD className="font-semibold">
				<StatusBadge className="bg-[#137fec]/7 text-[#137fec] border-[#137fec]/70" classCircle=" hidden ">
					Khách thuê
				</StatusBadge>
			</TD>
			<TD className="text-sm underline decoration-sky-500 decoration-2 underline-offset-2 text-slate-500">Phòng: P101</TD>
			<TD>
				<BtnToggle />
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
};

export default Row;
