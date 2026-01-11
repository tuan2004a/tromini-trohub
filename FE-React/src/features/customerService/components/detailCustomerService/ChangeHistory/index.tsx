import ChangeHistoryItems from "./ChangeHistoryItems";

const ChangeHistory = () => {
    return (
		<div>
			<span className="p-5 font-semibold text-lg flex items-center gap-2">Lịch sử thay đổi</span>
			<ul className="*:py-3 *:border-y *:border-slate-200 *:px-5">
				<ChangeHistoryItems />
				<ChangeHistoryItems />
				<ChangeHistoryItems />
			</ul>
		</div>
	);
}

export default ChangeHistory
