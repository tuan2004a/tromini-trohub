import { FaRegCheckCircle } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";

const PaymentSummary = () => {
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<span className="text-slate-500 text-sm">Tổng phải thu</span>
				<p className="font-semibold text-slate-900">4.805.000 đ</p>
			</div>
			<div className="flex items-center justify-between text-red-600">
				<span className="text-sm flex items-center gap-x-1">
					<IoReceiptOutline />
					Còn lại
				</span>
				<p className="font-semibold">0 đ</p>
			</div>
			<div className="flex items-center justify-between text-green-600 text-lg">
				<span className="text-base font-medium flex items-center gap-x-1">
					<FaRegCheckCircle className="text-lg" />
					Đã thanh toán
				</span>
				<p className="font-semibold">4.805.000 đ</p>
			</div>
		</div>
	);
};

export default PaymentSummary;
