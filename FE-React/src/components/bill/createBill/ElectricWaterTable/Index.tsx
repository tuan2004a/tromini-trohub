import { memo } from "react";
import TbodyRow from "./TbodyRow";
import TheadRow from "./TheadRow";

const ElectricWaterTable = memo(() => {
	return (
		<table className="w-full min-w-[1200px]">
			<thead>
				<TheadRow />
			</thead>
			<tbody>
				<TbodyRow />
			</tbody>
		</table>
	);
});

export default ElectricWaterTable;
