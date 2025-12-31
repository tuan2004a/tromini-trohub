const TenantInfo = () => {
	return (
		<div>
			<span className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Người thuê đại diện</span>
			<div className="flex items-center gap-x-3">
				<img className="size-8 rounded-full bg-slate-200" src="https://i.pravatar.cc/" alt="" />
				<div>
					<span className="text-sm font-semibold text-slate-900">vananguyen@email.com</span>
					<p className="text-xs text-slate-500">123 456 7890</p>
				</div>
			</div>
		</div>
	);
};

export default TenantInfo;
