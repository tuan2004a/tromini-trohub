import PaginationTable from "@common/table/paginationTable";
import { memo } from "react";
import TbodyRow from "./TbodyRow";
import TheadRow from "./TheadRow"

const RoomTable = memo(() => {
	return (
		<div>
			<table className="w-full ">
				<thead>
					<TheadRow />
				</thead>
				<tbody className="*:even:bg-slate-50">
					<TbodyRow />
				</tbody>
			</table>
			<div className="w-full p-4 border-t border-slate-200">
				<PaginationTable />
			</div>
		</div>
	);
});

export default RoomTable;
