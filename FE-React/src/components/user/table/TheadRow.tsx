import TH from "@common/table/th";

const TheadRow = () => {
	return (
		<tr className="bg-slate-100 border-b border-slate-200">
			<TH className="rounded-tl-xl">Tên</TH>
			<TH>Liên hệ</TH>
			<TH>Loại</TH>
			<TH>Chi tiết / Quyền</TH>
			<TH>Trạng thái</TH>
			<TH className="rounded-tr-xl">Thao tác</TH>
		</tr>
	);
};

export default TheadRow;
