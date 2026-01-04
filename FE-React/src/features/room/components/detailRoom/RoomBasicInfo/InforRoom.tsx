const InforRoom = () => {
    return (
		<div className="flex items-center justify-between">
			<div>
				<span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Mã phòng</span>
				<p className="text-base font-semibold text-slate-900">P101</p>
			</div>
			<div>
				<span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Tòa / Khu</span>
				<p className="text-base font-semibold text-slate-900">Khu A</p>
			</div>
			<div>
				<span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Tag</span>
				<p className="text-base font-semibold text-slate-900">Giường 2 tầng</p>
			</div>
			<div>
				<span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Diện tích</span>
				<p className="text-base font-semibold text-slate-900">25m²</p>
			</div>
		</div>
	);
}

export default InforRoom
