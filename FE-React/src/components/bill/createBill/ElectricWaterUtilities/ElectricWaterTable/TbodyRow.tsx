import Input from "@common/input/Input";
import TD from "@common/table/td";
import { memo } from "react";
import { FaWifi } from "react-icons/fa";
import { IoWater } from "react-icons/io5";

const TbodyRow = memo(() => {
	return (
		<>
			<tr>
				<TD className="flex items-center gap-3">
					<div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
						<FaWifi className="text-slate-500" />
					</div>
					Điện
				</TD>
				<TD>
					<Input className="bg-slate-200 text-slate-500" type="text" value="3000" />
				</TD>
				<TD>
					<Input className="" type="number" />
				</TD>
				<TD>
					<div className="size-8 bg-gray-200 rounded-lg flex-center">0</div>
				</TD>
				<TD>3,500 đ/Wh</TD>
				<TD>0 đ</TD>
			</tr>
			<tr>
				<TD className="flex items-center gap-3">
					<div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
						<IoWater className="text-slate-500" />
					</div>
					Nước
				</TD>
				<TD>
					<Input className="bg-slate-200 text-slate-500" type="text" value="120" />
				</TD>
				<TD>
					<Input className="" type="number" />
				</TD>
				<TD>
					<div className="size-8 bg-gray-200 rounded-lg flex-center">0</div>
				</TD>
				<TD>25,000 đ/m3</TD>
				<TD>0 đ</TD>
			</tr>
		</>
	);
});

export default TbodyRow;
