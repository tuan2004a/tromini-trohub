import { FaEye, FaTrash, FaWifi } from "react-icons/fa";
import TD from "@common/table/td";
import TH from "@common/table/th";
import { FaRegPenToSquare } from "react-icons/fa6";
import BtnAction from "@common/button/btnAction";
import PaginationTable from "@common/table/paginationTable";
import StatusBadge from "@common/card/statusBadge";

const UserTable = () => {
	return (
		<div>
			<table className="w-full ">
				<thead>
					<tr className="bg-slate-100 border-b border-slate-200">
						<TH className="rounded-tl-xl">Dịch vụ</TH>
						<TH>icon</TH>
						<TH>Giá thuê</TH>
						<TH>Đơn vị tính</TH>
						<TH>Mô tả</TH>
						<TH>Trạng thái</TH>
						<TH className="rounded-tr-xl">Thao tác</TH>
					</tr>
				</thead>
				<tbody className="*:even:bg-slate-50">
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
							<StatusBadge className="bg-green-50 text-green-500 border-green-200" classCircle=" bg-green-500! ">
								Hoạt động
							</StatusBadge>
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
				</tbody>
			</table>
			<div className="w-full p-4 border-t border-slate-200">
				<PaginationTable />
			</div>
		</div>
	);
};

export default UserTable;
