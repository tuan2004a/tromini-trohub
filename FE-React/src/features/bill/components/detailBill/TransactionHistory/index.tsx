import TransactionEmptyState from "./TransactionEmptyState";

const TransactionHistory = () => {
    return (
		<div>
			<span className="font-semibold text-slate-900 pb-3 block mb-4 text-lg">Lịch sử giao dịch</span>
			<TransactionEmptyState />
		</div>
	);
}

export default TransactionHistory
