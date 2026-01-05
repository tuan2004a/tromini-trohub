import TH from "@common/table/th";

const TheadRow = () => {
    return (
		<tr className="uppercase text-xs">
			<TH>Tên dịch vụ</TH>
			<TH>Đơn vị tính</TH>
			<TH className="text-right">Giá</TH>
		</tr>
	);
}

export default TheadRow
