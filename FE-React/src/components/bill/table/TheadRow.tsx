import TH from "@common/table/th"

const TheadRow = () => {
    return (
		<tr className="bg-slate-100 border-b border-slate-200 *:px-6! *:whitespace-nowrap">
			<TH className="rounded-tl-xl">Mã HĐ</TH>
			<TH>Phòng - Khách</TH>
			<TH>Kỳ HĐ</TH>
			<TH>Tổng phải thu</TH>
			<TH>Đã thanh toán</TH>
			<TH>Còn lại</TH>
			<TH>Hạn TT</TH>
			<TH>Trạng thái</TH>
			<TH className="rounded-tr-xl">Thao tác</TH>
		</tr>
	);
}

export default TheadRow
