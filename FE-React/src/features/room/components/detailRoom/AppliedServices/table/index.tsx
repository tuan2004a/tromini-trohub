import TbodyRow from "./TbodyRow";
import TheadRow from "./TheadRow";

const Table = () => {
    return (
		<table className="w-full rounded-xl">
			<thead>
				<TheadRow />
			</thead>
			<tbody>
				<TbodyRow />
			</tbody>
		</table>
	);
}

export default Table
