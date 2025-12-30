import { memo } from "react";
import ExtraFeeSection from "./ExtraFeeSection";
import ChargeList from "./ChargeList";
import VatToggle from "./VatToggle";

const BillSummary = memo(() => {
	return (
		<div>
			<span className="font-semibold text-lg mb-3 block">Tổng kết & Thanh toán</span>
			<div>
				<ExtraFeeSection />
				<hr className="border-t border-slate-200 my-6" />
				<ChargeList />
				<hr className="border-t border-slate-200 my-6" />
				<VatToggle />
				<hr className="border-t border-slate-200 my-6" />
				<div className="flex flex-col gap-1 text-right">
					<span className="text-sm text-slate-500">Tổng cộng phải trả</span>
					<span className="text-3xl font-bold text-primary tracking-tight">4,730,000 đ</span>
				</div>
			</div>
		</div>
	);
});

export default BillSummary;
