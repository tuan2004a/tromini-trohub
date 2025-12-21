import TH from "@common/table/th";
import PaginationTable from "@common/table/paginationTable";
import { memo } from "react";
import Row from "./table/Row";

const ServiceTable = memo(() => {
	
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
					<Row />
				</tbody>
			</table>
			<div className="w-full p-4 border-t border-slate-200">
				<PaginationTable />
			</div>
		</div>
	);
});

export default ServiceTable;
