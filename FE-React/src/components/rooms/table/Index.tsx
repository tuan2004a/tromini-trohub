import PaginationTable from "@common/table/paginationTable";
import { memo } from "react";
import TbodyRow from "./TbodyRow";
import TheadRow from "./TheadRow"

const RoomTable = memo(() => {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-[1200px]">
					<thead>
						<TheadRow />
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
});

export default RoomTable;
