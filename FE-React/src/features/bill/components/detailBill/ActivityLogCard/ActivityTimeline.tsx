
const ActivityTimeline = () => {
    return (
		<li className="mb-5 ml-5">
			<span className="absolute flex items-center justify-center size-2 bg-[#137fec] rounded-full -start-1 ring-2 ring-[#137fec]/50"></span>
			<p className="text-sm text-slate-600">
				<strong className="font-medium text-slate-900">Admin User</strong> đã tạo hóa đơn.
			</p>
			<time className="text-xs text-slate-400 mt-0.5 border-b font-medium pr-5 py-0.5">01/11/2023 - 08:30 AM</time>
		</li>
	);
}

export default ActivityTimeline
