import TH from "@common/table/th";

const TheadRow = () => {
	return (
		<tr className="bg-slate-100 border-b border-slate-200">
			<TH className="rounded-tl-xl">Dịch vụ</TH>
			<TH>icon</TH>
			<TH>Giá thuê</TH>
			<TH>Đơn vị tính</TH>
			<TH>Mô tả</TH>
			<TH>Trạng thái</TH>
			<TH className="rounded-tr-xl">Thao tác</TH>
		</tr>
	);
};

export default TheadRow;
