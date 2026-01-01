import { FaRegCheckCircle } from "react-icons/fa";

const BillPaid = () => {
	return (
		<div className="w-full! mt-4">
			<p className="text-xs text-slate-400 flex items-center justify-center gap-x-1">
				Đã thanh toán 100% <FaRegCheckCircle />
			</p>
		</div>
	);
};

export default BillPaid;
