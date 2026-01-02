import BtnAction from "@common/button/btnAction";
import StatusBadge from "@common/card/statusBadge";
import TD from "@common/table/td";
import { FaEye, FaPrint, FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router";

const TbodyRow = () => {
	const navigate = useNavigate();

	return (
		<tr className="*:px-6! *:whitespace-nowrap">
			<TD className="font-medium! text-sm">#HĐ-NF5432GF</TD>
			<TD>
				<p className="text-[15px] font-medium text-slate-700">P101 - Tầng 1</p>
				<p className="text-[13px] text-slate-400">Nguyễn Văn A</p>
			</TD>
			<TD className="font-medium! text-sm text-slate-500">T10/2023</TD>
			<TD className="font-medium! text-sm">4.500.000</TD>
			<TD className="font-medium! text-sm text-green-500">5.000.000</TD>
			<TD className="font-medium! text-sm text-slate-400">0</TD>
			<TD className="font-medium! text-sm text-slate-600">10/10/2023</TD>
			<TD className="font-medium! text-sm text-slate-600">
				<StatusBadge className="text-green-500 bg-green-50" classCircle="hidden">
					<IoMdCheckmarkCircleOutline className="text-lg" />
					Đa thu
				</StatusBadge>
			</TD>
			<TD className="font-medium! text-sm text-slate-600 space-x-1.5">
				<BtnAction
					onClick={() => {
						navigate("/quan-ly-hoa-don/chi-tiet-hoa-don");
					}}
					dataTooltip="Chi tiết"
					className="bg-yellow-500"
				>
					<FaEye className="text-lg" />
				</BtnAction>
				<BtnAction dataTooltip="In/PDF" className="bg-slate-500">
					<FaPrint className="text-lg" />
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

export default TbodyRow;
