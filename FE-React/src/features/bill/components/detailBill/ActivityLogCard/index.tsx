import { memo } from "react";
import ActivityTimeline from "./ActivityTimeline";

const ActivityLog = memo(() => {
	return (
		<div>
			<span className="font-semibold text-slate-900 pb-3 block mb-2 text-lg">Nhật ký hoạt động</span>
			<ol className="  max-h-[193px] overflow-y-auto px-3 pt-1">
				<div className=" relative border-l border-slate-400">
					<ActivityTimeline />
					<ActivityTimeline />
					<ActivityTimeline />
				</div>
			</ol>
		</div>
	);
});

export default ActivityLog;
