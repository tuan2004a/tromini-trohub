import TH from "@common/table/th";
import PaginationTable from "@common/table/paginationTable";
import TbodyRow from "./TbodyRow";

const UserTable = () => {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-[1200px]">
					<thead>
						<tr className="bg-slate-100 border-b border-slate-200">
							<TH className="rounded-tl-xl">Tên</TH>
							<TH>Liên hệ</TH>
							<TH>Loại</TH>
							<TH>Chi tiết / Quyền</TH>
							<TH>Trạng thái</TH>
							<TH className="rounded-tr-xl">Thao tác</TH>
						</tr>
					</thead>
					<tbody className="*:even:bg-slate-50">
						<TbodyRow />
					</tbody>
				</table>
			</div>
			<div className="w-full p-4 border-t border-slate-200">
				<PaginationTable />
			</div>
		</div>
	);
};

export default UserTable;
