import StatusBadge from "@common/card/statusBadge";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
const BillIdentityInfo = () => {
	return (
		<div>
			<div className="flex items-center gap-x-3">
				<h1 className="text-3xl font-bold text-slate-900">#HĐ-NF5432GF</h1>
				<StatusBadge className="bg-red-100 border-red-500 text-red-500">Chưa thanh toán</StatusBadge>
			</div>
			<div className="flex items-center gap-3 text-sm text-slate-400 mt-0.5">
				<span className="flex items-center gap-x-1">
					<FaRegCalendarAlt className="text-base" /> Kỳ: 01/10/2023 - 31/10/2023
				</span>
				<span className="size-1 bg-slate-400 block rounded-full"></span>
				<span className="flex items-center gap-x-1.5">
					<FaUser />
					Nguyễn Văn A
				</span>
			</div>
		</div>
	);
};

export default BillIdentityInfo;
