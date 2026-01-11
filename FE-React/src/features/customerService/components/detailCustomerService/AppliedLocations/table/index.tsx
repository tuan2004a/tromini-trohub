import TbodyRow from "./TbodyRow";
import TheadRow from "./TheadRow";

const AppliedLocationsTable = () => {
    return (
		<table className="w-full">
			<thead className="border-y border-slate-200">
				<TheadRow />
			</thead>
			<tbody>
				<TbodyRow />
				<TbodyRow />
			</tbody>
		</table>
	);
}

export default AppliedLocationsTable
