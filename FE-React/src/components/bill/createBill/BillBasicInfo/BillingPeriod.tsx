import Input from "@common/input/Input";

const BillingPeriod = () => {
	return (
		<div>
			<label className="text-sm text-slate-500" htmlFor="billingPeriod">
				Kỳ hóa đơn
			</label>
			<Input type="month" id="billingPeriod" className="border-gray-300" />
		</div>
	);
};

export default BillingPeriod;
