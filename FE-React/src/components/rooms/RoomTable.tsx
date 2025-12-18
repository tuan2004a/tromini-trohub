import { FaDoorOpen, FaEye, FaTrash } from "react-icons/fa";
import TD from "../common/table/td";
import TH from "../common/table/th";
import StatusBadge from "../common/card/statusBadge";
import { FaRegPenToSquare } from "react-icons/fa6";
import BtnAction from "../common/button/btnAction";

const RoomTable = () => {
	return (
		<table className="w-full">
			<thead>
				<tr className="bg-slate-100 border-y border-slate-200">
					<TH>Phòng</TH>
					<TH>Tag</TH>
					<TH className="">Giá thuê</TH>
					<TH className="">Trạng thái</TH>
					<TH className="">Dịch vụ</TH>
					<TH className="">Thao tác</TH>
				</tr>
			</thead>
			<tbody className="*:even:bg-slate-50">
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
						<StatusBadge className="bg-red-50 text-red-700 border-red-200" classCircle=" bg-red-500 ">
							Đang thuê
						</StatusBadge>
					</TD>
					<TD>fasd</TD>
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
			</tbody>
		</table>
	);
};

export default RoomTable;
