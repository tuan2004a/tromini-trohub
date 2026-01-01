import TD from '@/shared/common/table/td';

const TfootRow = () => {
    return (
		<tr>
			<TD className="font-semibold text-slate-800">Chi tiết các khoản phí</TD>
			<TD className="text-right font-medium text-slate-600" colSpan={2}>
				Tổng cộng
			</TD>
			<TD className="text-right text-lg font-bold text-[#137fec]">4.805.000</TD>
		</tr>
	);
}

export default TfootRow
