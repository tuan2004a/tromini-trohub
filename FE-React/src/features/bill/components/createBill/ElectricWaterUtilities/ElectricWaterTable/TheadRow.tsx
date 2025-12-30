import TH from "@common/table/th";

const TheadRow = () => {
	return (
		<tr className="bg-slate-100 border-b border-slate-200 *:first:rounded-tl-xl *:last:rounded-tr-xl">
			<TH>Dịch vụ</TH>
			<TH className="max-w-[250px] w-[250px]">Số cũ</TH>
			<TH className="max-w-[250px] w-[250px]">Số mới</TH>
			<TH>Sử dụng</TH>
			<TH>Đơn giá</TH>
			<TH>Thành tiền</TH>
		</tr>
	);
};

export default TheadRow;
