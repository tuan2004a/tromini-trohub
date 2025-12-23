import { memo } from "react";
import TheadRow from "./TheadRow";
import TbodyRow from "./TbodyRow";
import PaginationTable from "@common/table/paginationTable";

const BillTable = memo(() => {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-[1200px]">
					<thead>
						<TheadRow />
					</thead>
					<tbody>
						<TbodyRow />
					</tbody>
				</table>
			</div>
			<div className="w-full p-4 border-t border-slate-200">
				<PaginationTable />
			</div>
		</div>
	);
});

export default BillTable;
