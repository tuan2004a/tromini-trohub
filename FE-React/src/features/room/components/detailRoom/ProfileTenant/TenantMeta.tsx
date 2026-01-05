const TenantMeta = () => {
    return (
		<div className="w-full bg-slate-50 space-x-1 p-3 rounded-lg *:flex *:justify-between *:items-center">
			<div>
				<span className="text-xs text-slate-500">Ngày Thuê</span>
				<span className="text-sm font-medium text-slate-900">01/03/2023</span>
			</div>
			<div>
				<span className="text-xs text-slate-500">Hợp đồng</span>
				<button className="text-sm font-medium text-[#137fec] hover:underline cursor-pointer">HD-00123</button>
			</div>
		</div>
	);
}

export default TenantMeta
