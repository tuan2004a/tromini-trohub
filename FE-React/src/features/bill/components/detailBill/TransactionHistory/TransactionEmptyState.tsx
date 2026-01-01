import { IoReceiptOutline } from "react-icons/io5";

const TransactionEmptyState = () => {
	return (
		<div className="size-full flex-center flex-col">
			<IoReceiptOutline className="text-3xl text-slate-400 flex items-center justify-center mb-3" />
			<p className="text-sm font-medium text-slate-700">Chưa có giao dịch nào</p>
			<p className="text-xs text-slate-400 mt-1 max-w-[250px] text-center">Các khoản thanh toán sẽ xuất hiện ở đây sau khi được ghi nhận.</p>
		</div>
	);
};

export default TransactionEmptyState;
