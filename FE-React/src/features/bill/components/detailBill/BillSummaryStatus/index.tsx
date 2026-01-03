import BillPaid from "./BillPaid";
import PaymentSummary from "./PaymentSummary";

const BillSummaryStatus = () => {
	return (
		<div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
			<span className="font-semibold text-slate-900 block mb-4">Tình trạng thanh toán</span>
			<PaymentSummary />
			<BillPaid />
		</div>
	);
};

export default BillSummaryStatus;
