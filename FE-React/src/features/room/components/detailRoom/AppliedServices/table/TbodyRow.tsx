import { Icon } from "@common/card/Index";
import TD from "@common/table/td";
import { MdElectricBolt } from "react-icons/md";

const TbodyRow = () => {
	return (
		<>
			<tr className="">
				<TD className="flex items-center gap-x-2">
					<Icon size={7} className="">
						<MdElectricBolt className="text-lg" />
					</Icon>{" "}
					Điện sinh hoạt
				</TD>
				<TD>Kwh</TD>
				<TD className="text-right">3.500 ₫</TD>
			</tr>
			<tr className="">
				<TD className="flex items-center gap-x-2">
					<Icon size={7} className="">
						<MdElectricBolt className="text-lg" />
					</Icon>{" "}
					Điện sinh hoạt
				</TD>
				<TD>Kwh</TD>
				<TD className="text-right">3.500 ₫</TD>
			</tr>
			<tr className="">
				<TD className="flex items-center gap-x-2">
					<Icon size={7} className="">
						<MdElectricBolt className="text-lg" />
					</Icon>{" "}
					Điện sinh hoạt
				</TD>
				<TD>Kwh</TD>
				<TD className="text-right">3.500 ₫</TD>
			</tr>
			<tr className="">
				<TD className="flex items-center gap-x-2">
					<Icon size={7} className="">
						<MdElectricBolt className="text-lg" />
					</Icon>{" "}
					Điện sinh hoạt
				</TD>
				<TD>Kwh</TD>
				<TD className="text-right">3.500 ₫</TD>
			</tr>
		</>
	);
};

export default TbodyRow;
