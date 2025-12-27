import Input from "@common/input/Input";
import TD from "@common/table/td";
import { memo } from "react";
import { FaWifi } from "react-icons/fa";

const TbodyRow = memo(() => {
	return (
		<tr>
			<TD className="flex items-center gap-3">
				<div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
					<FaWifi className="text-slate-500" />
				</div>
				Điện
			</TD>
			<TD className="">
				<Input className="bg-slate-200 text-slate-500" type="text" value="3000" />
			</TD>
			<TD className="">
				<Input className="" type="number" />
			</TD>
		</tr>
	);
});

export default TbodyRow;
