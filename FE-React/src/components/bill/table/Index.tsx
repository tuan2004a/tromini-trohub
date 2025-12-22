import { memo } from "react";
import TheadRow from "./TheadRow";
import TbodyRow from "./TbodyRow";
import PaginationTable from "@common/table/paginationTable";

const BillTable = memo(() => {
	return (
		<div>
			<table className="w-full ">
				<thead >
					<TheadRow />
				</thead>
				<tbody >
					<TbodyRow />
				</tbody>
			</table>
			<div className="w-full p-4 border-t border-slate-200">
				<PaginationTable />
			</div>
		</div>
	);
});

export default BillTable;
