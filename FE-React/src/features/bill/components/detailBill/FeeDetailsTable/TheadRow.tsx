import TH from "@/shared/common/table/th";

const TheadRow = () => {
    return (
		<tr className="*:first:rounded-tl-xl *:last:rounded-tr-xl bg-slate-100 border-b border-slate-200">
			<TH className="w-1/2">Khoản mục</TH>
			<TH className="text-center! w-30! text-wrap">Số lượng / Chỉ số</TH>
			<TH className="text-right!">Đơn giá</TH>
			<TH className="text-right!">
				Thành tiền
				<p className="text-[10px] text-slate-400">(VND)</p>
			</TH>
		</tr>
	);
}

export default TheadRow
