// import td from "../common/table/td";

import TD from "../common/table/td";
import TH from "../common/table/th";

const RecentTransactions = () => {
	return (
		<div className="w-full rounded-xl bg-white ">
			<div className="w-full flex justify-between p-5 text-slate-900 text-base font-bold">
				Giao dịch gần đây
				<button
					type="submit"
					className="text-[#137fec] text-xs font-bold hover:underline cursor-pointer"
				>
					chi tiết
				</button>
			</div>
			<table className="w-full">
				<thead>
					<tr className="bg-slate-100 border-y border-slate-200">
						<TH>Phòng</TH>
						<TH>Nội dung</TH>
						<TH className="text-right!">Số tiền</TH>
						<TH className="text-right!">trại thái</TH>
					</tr>
				</thead>
				<tbody className="*:even:bg-slate-50">
					<tr>
						<TD className="font-medium!">P201</TD>
						<TD className="text-slate-500">Tiền phòng T10</TD>
						<TD className="text-right! font-bold!">2.000.000đ</TD>
						<TD className="text-right! text-sm text-green-600">
							Đã thu
						</TD>
					</tr>
					<tr>
						<TD className="font-medium!">P201</TD>
						<TD className="text-slate-500">Tiền phòng T10</TD>
						<TD className="text-right! font-bold!">2.000.000đ</TD>
						<TD className="text-right! text-sm text-green-600">
							Đã thu
						</TD>
					</tr>
					<tr>
						<TD className="font-medium!">P201</TD>
						<TD className="text-slate-500">Tiền phòng T10</TD>
						<TD className="text-right! font-bold!">2.000.000đ</TD>
						<TD className="text-right! text-sm text-green-600">
							Đã thu
						</TD>
					</tr>
					<tr>
						<TD className="font-medium!">P201</TD>
						<TD className="text-slate-500">Tiền phòng T10</TD>
						<TD className="text-right! font-bold!">2.000.000đ</TD>
						<TD className="text-right! text-sm text-green-600">
							Đã thu
						</TD>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RecentTransactions;
