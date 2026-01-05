import HistoryTimeline from "./HistoryTimeline";

const ChangeHistory = () => {
	return (
		<div>
			<span className="text-lg font-semibold text-slate-900 flex items-center">Thông tin cơ bản</span>
			<div className="max-h-[260px] overflow-y-auto pl-3 pt-1">
				<HistoryTimeline />
			</div>
		</div>
	);
};

export default ChangeHistory;
