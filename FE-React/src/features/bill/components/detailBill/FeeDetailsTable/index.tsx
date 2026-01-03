import { memo } from "react";
import TheadRow from "./TheadRow";
import TbodyRow from "./TbodyRow";
import TfootRow from "./TfootRow";

const FeeDetailsTable = memo(() => {
	return (
		<div >
			<table className="w-full">
				<thead className="text-[13px] uppercase">
					<TheadRow />
				</thead>
				<tbody>
					<TbodyRow />
				</tbody>
				<tfoot className="border-t border-slate-200">
					<TfootRow/>
				</tfoot>
			</table>
		</div>
	);
});

export default FeeDetailsTable;
