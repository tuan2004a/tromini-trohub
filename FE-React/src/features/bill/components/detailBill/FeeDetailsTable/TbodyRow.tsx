import TD from "@/shared/common/table/td";

const TbodyRow = () => {
	return (
		<>
			<tr className="">
				<TD>Tiền phòng Tháng 11/2023</TD>
				<TD className="text-center!">1 tháng</TD>
				<TD className="text-right">3.500.000</TD>
				<TD className="font-medium text-right">3.500.000</TD>
			</tr>
			<tr>
				<TD className="flex flex-col">
					Tiền điện
					<p className="text-xs text-slate-500">Chỉ số cũ: 1250 - Mới: 1380</p>
				</TD>
				<TD className="text-center!">130 kWh</TD>
				<TD className="text-right">3.500</TD>
				<TD className="font-medium text-right">455.000</TD>
			</tr>
			<tr>
				<TD className="flex flex-col">
					Tiền nước
					<p className="text-xs text-slate-500">Chỉ số cũ: 1250 - Mới: 1380</p>
				</TD>
				<TD className="text-center!">20 lít</TD>
				<TD className="text-right">25,000</TD>
				<TD className="font-medium text-right">250,000</TD>
			</tr>
			<tr>
				<TD>Dịch vụ chung (Rác, Wifi,...)</TD>
				<TD className="text-center!">-</TD>
				<TD className="text-right">-</TD>
				<TD className="font-medium text-right">200.000</TD>
			</tr>
		</>
	);
};

export default TbodyRow;
