import BillPaid from "./BillPaid";
import PaymentSummary from "./PaymentSummary";

const BillSummaryStatus = () => {
	return (
		<div>
			<span className="font-semibold text-slate-900 block mb-4">Tình trạng thanh toán</span>
			<PaymentSummary />
			<BillPaid />
		</div>
	);
};

export default BillSummaryStatus;
