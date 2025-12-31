const PaymentTimeline = () => {
    return (
		<div className="flex justify-between items-center">
			<div className="">
				<span className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Ngày lập</span>
				<p className="text-sm text-slate-900">01/11/2023</p>
			</div>
			<div>
				<span className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Hạn thanh toán</span>
				<p className="text-sm font-semibold text-red-600">05/11/2023</p>
			</div>
		</div>
	);
}

export default PaymentTimeline
